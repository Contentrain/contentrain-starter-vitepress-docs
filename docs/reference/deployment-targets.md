---
description: Reference for static deployment targets and expected output paths.
order: 3
sidebar_label: Deployment Targets
slug: deployment-targets
title: Deployment Targets
---

# Deployment Targets

This starter is designed for static deployment providers.

## Recommended outputs

- Vercel: `docs/.vitepress/dist`
- Netlify: `docs/.vitepress/dist`
- Cloudflare Pages: `docs/.vitepress/dist`

## Build contract

Use `pnpm build` and ensure the project root remains the repository root so the generated `#contentrain` client is available during build.
