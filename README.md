# TrackerKcal Landing Page

Landing page premium e responsiva para a startup brasileira **TrackerKcal**, uma plataforma de nutrição inteligente com IA para acompanhamento progressivo de calorias, macronutrientes, micronutrientes, hidratação, treino, sono, peso corporal e tendências de evolução.

## Tecnologias

- React
- TypeScript
- Tailwind CSS
- Vite

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

O build executa a checagem TypeScript e gera os arquivos estáticos em `dist/`.

## Nota sobre dependências

Este repositório inclui pacotes locais em `vendor/` para garantir instalação e build reproduzíveis mesmo em ambientes sem acesso ao registry npm. Os scripts mantêm a interface de desenvolvimento esperada (`vite`, `tsc`, `npm run dev`, `npm run build`) para validação local do projeto.

## Estrutura principal

- `src/App.tsx`: composição das seções da landing page, incluindo hero, prova de valor, solução, funcionalidades, dashboard, planos e CTA.
- `src/components`: componentes reutilizáveis, incluindo logo SVG, header, hero e dashboard mockup.
- `src/data/content.ts`: conteúdo centralizado de menus, cards, funcionalidades, benefícios, planos e paleta.
- `src/styles.css`: utilitários visuais, efeitos premium, animações e ajustes globais de tipografia/seleção.
- `vendor/`: dependências locais usadas para evitar falhas de instalação causadas por bloqueio de registry no ambiente.
