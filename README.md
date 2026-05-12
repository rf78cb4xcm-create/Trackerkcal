# TrackerKcal Landing Page

Landing page premium e responsiva para a startup brasileira **TrackerKcal**, uma plataforma de nutrição inteligente com IA para acompanhamento progressivo de calorias, macronutrientes, micronutrientes, hidratação, treino, sono, peso corporal e tendências de evolução.

## Visualização pelo navegador, sem terminal

O projeto está configurado para publicação automática no **GitHub Pages** por meio do workflow `.github/workflows/deploy.yml`.

### Primeiro deploy

1. Abra o repositório no GitHub.
2. Acesse **Settings** → **Pages**.
3. Em **Build and deployment**, selecione **Source: GitHub Actions**.
4. Acesse a aba **Actions**.
5. Rode o workflow **Deploy TrackerKcal to GitHub Pages** manualmente em **Run workflow** ou faça um push na branch `main`.
6. Ao terminar, o GitHub mostrará a URL pública em **Settings** → **Pages**.

A URL costuma seguir este formato:

```text
https://rf78cb4xcm-create.github.io/Trackerkcal/
```

Depois do primeiro deploy, qualquer alteração enviada para a branch `main` publica uma nova versão automaticamente.

## Como rodar localmente

```bash
npm install
npm run dev
```

A aplicação ficará disponível no endereço exibido pelo script de desenvolvimento, normalmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

O build executa a checagem TypeScript e gera os arquivos estáticos em `dist/`. O projeto usa `base: '/Trackerkcal/'` no Vite para funcionar corretamente no GitHub Pages deste repositório.

## Tecnologias

- React
- TypeScript
- Tailwind CSS
- Vite
- GitHub Actions
- GitHub Pages

## Nota sobre dependências

Este repositório inclui pacotes locais em `vendor/` para garantir instalação e build reproduzíveis mesmo em ambientes sem acesso ao registry npm. Os scripts mantêm a interface de desenvolvimento esperada (`vite`, `tsc`, `npm run dev`, `npm run build`) para validação local do projeto.

## Estrutura principal

- `.github/workflows/deploy.yml`: workflow de build e deploy no GitHub Pages.
- `src/App.tsx`: composição das seções da landing page, incluindo hero, prova de valor, solução, funcionalidades, dashboard, planos e CTA.
- `src/components`: componentes reutilizáveis, incluindo logo SVG, header, hero e dashboard mockup.
- `src/data/content.ts`: conteúdo centralizado de menus, cards, funcionalidades, benefícios, planos e paleta.
- `src/styles.css`: utilitários visuais, efeitos premium, animações e ajustes globais de tipografia/seleção.
- `vendor/`: dependências locais usadas para evitar falhas de instalação causadas por bloqueio de registry no ambiente.
