#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';

const command = process.argv[2] && !process.argv[2].startsWith('-') ? process.argv[2] : 'dev';
const root = process.cwd();
const dist = join(root, 'dist');
const tmp = join(dist, 'assets');

function runTsc() {
  const result = spawnSync('tsc', [
    '-p', 'tsconfig.app.json',
    '--noEmit', 'false',
    '--outDir', tmp,
    '--declaration', 'false',
    '--sourceMap', 'false',
    '--tsBuildInfoFile', './node_modules/.tmp/local-vite-build.tsbuildinfo',
  ], { stdio: 'inherit', cwd: root });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function patchCompiledImports(file) {
  let code = readFileSync(file, 'utf8');
  code = code.replace("import './styles.css';", '');
  code = code.replace(/from ['"]react['"]/g, "from '/vendor/react/index.js'");
  code = code.replace(/from ['"]react\/jsx-runtime['"]/g, "from '/vendor/react/jsx-runtime.js'");
  code = code.replace(/from ['"]react-dom\/client['"]/g, "from '/vendor/react-dom/client/index.js'");
  writeFileSync(file, code);
}

function build() {
  rmSync(dist, { recursive: true, force: true });
  mkdirSync(tmp, { recursive: true });
  runTsc();
  patchCompiledImports(join(tmp, 'main.js'));
  let html = readFileSync(join(root, 'index.html'), 'utf8')
    .replace('<script type="module" src="/src/main.tsx"></script>', '<script src="https://cdn.tailwindcss.com"></script>\n    <link rel="stylesheet" href="/assets/styles.css" />\n    <script type="module" src="/assets/main.js"></script>');
  writeFileSync(join(dist, 'index.html'), html);
  cpSync(join(root, 'src/styles.css'), join(tmp, 'styles.css'));
  cpSync(join(root, 'vendor'), join(dist, 'vendor'), { recursive: true });
  console.log('✓ built in dist/');
}

function contentType(pathname) {
  return ({ '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8' })[extname(pathname)] || 'text/plain; charset=utf-8';
}

function serve() {
  build();
  const portIndex = process.argv.indexOf('--port');
  const port = Number(process.env.PORT || (portIndex >= 0 ? process.argv[portIndex + 1] : 5173));
  createServer((request, response) => {
    const url = new URL(request.url || '/', `http://localhost:${port}`);
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    const file = resolve(dist, `.${pathname}`);
    try {
      response.writeHead(200, { 'content-type': contentType(file) });
      response.end(readFileSync(file));
    } catch {
      response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      response.end('Not found');
    }
  }).listen(port, '0.0.0.0', () => console.log(`Local: http://localhost:${port}/`));
}

if (command === 'build') build();
else if (command === 'preview' || command === 'dev') serve();
else {
  console.error(`Unsupported local vite command: ${command}`);
  process.exit(1);
}
