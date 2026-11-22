# xzsv.github.io

The public documentation site for the XZSV suite — [`@xzsv/router`](https://github.com/xzsv/router) and [`@xzsv/load`](https://github.com/xzsv/load), source-shipped Svelte 5 packages for SPAs that want game-feel: dual-tree route transitions and honest loading orchestration.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). The [`starlight-llms-txt`](https://github.com/delucis/starlight-llms-txt) plugin generates [`/llms.txt`](https://xzsv.github.io/llms.txt), `/llms-full.txt`, and `/llms-small.txt` for AI agents at build time.

## Commands

| Command           | Action                         |
| ----------------- | ------------------------------ |
| `bun install`     | Install dependencies           |
| `bun run dev`     | Dev server at `localhost:4321` |
| `bun run build`   | Static build to `./dist/`      |
| `bun run preview` | Preview the production build   |

## Deploy

Pushes to `main` build and deploy through GitHub Actions (`.github/workflows/deploy.yml`) to **https://xzsv.github.io/**. Enable GitHub Pages with the "GitHub Actions" source in the repository settings once.

## Content notes

- Public, beginner-friendly prose. The deeper internal engineering guide is the source of truth; changes there get ported here.
- The sidebar reserves a section for `@xzsv/animate` (in design) and future packages.
