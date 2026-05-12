#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const candidates = [
  '/root/.nvm/versions/node/v24.15.0/bin/tsc',
  '/usr/local/bin/tsc',
  '/usr/bin/tsc',
];
const executable = candidates.find((candidate) => existsSync(candidate));
if (!executable) {
  console.error('Local TypeScript wrapper could not find a tsc executable in this environment.');
  process.exit(1);
}
const result = spawnSync(executable, process.argv.slice(2), { stdio: 'inherit' });
process.exit(result.status ?? 1);
