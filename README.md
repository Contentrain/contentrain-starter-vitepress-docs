> Source of truth: this starter is exported from the `contentrain-starters` monorepo.
> Internal starter id: `vitepress-docs`.
# Contentrain VitePress Docs

Documentation starter for teams that want Markdown-native docs with Contentrain-managed schema, navigation, and long-form content.

## Start

```bash
pnpm install
pnpm dev
```

From the monorepo root you can also run `pnpm dev:vitepress-docs`.

## Commands

```bash
pnpm check
pnpm build
pnpm preview
```

## Contentrain Architecture

- Long-form docs pages are modeled as Contentrain `document` models and written into the real `docs/` tree through `content_path` overrides
- VitePress navigation and sidebar structure are generated from Contentrain content, not hardcoded arrays
- Official references are built in:
  - [SDK](https://ai.contentrain.io/packages/sdk.html)
  - [Docs](https://docs.contentrain.io/)
  - [Studio](https://studio.contentrain.io/)

If you change shared models or seed content from the monorepo, regenerate the local SDK first:

```bash
pnpm contentrain:prepare
```
