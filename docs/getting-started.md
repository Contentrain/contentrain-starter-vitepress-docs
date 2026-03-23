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

## Regenerate content after schema changes

```bash
pnpm contentrain:prepare
```

This does two things:

1. Syncs local Contentrain data and model files from the starter seed definitions.
2. Regenerates the typed SDK client that VitePress uses to build navigation and sidebars.

## Deploy flow

```bash
pnpm check
pnpm build
pnpm preview
```

The build output lands in `docs/.vitepress/dist`, which is ready for Vercel, Netlify, or Cloudflare Pages.
