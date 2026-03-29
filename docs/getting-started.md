---
description: Boot the docs starter, regenerate the SDK, and ship a docs site with seeded content.
order: 2
sidebar_label: Getting Started
slug: getting-started
title: Getting Started
---

# Getting Started

## Install

```bash
pnpm install
pnpm dev
```

The starter runs VitePress against the real `docs/` directory.

## Regenerate the SDK after local content changes

If you edit files under `.contentrain/models` or `.contentrain/content`, regenerate the typed SDK client:

```bash
pnpm contentrain:generate
```

This refreshes the `#contentrain` client that VitePress uses to build navigation and sidebars.

## Deploy flow

```bash
pnpm check
pnpm build
pnpm preview
```

The build output lands in `docs/.vitepress/dist`, which is ready for Netlify.
