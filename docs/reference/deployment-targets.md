---
description: Reference for static deployment targets and expected output paths.
order: 3
sidebar_label: Deployment Targets
slug: deployment-targets
title: Deployment Targets
---

# Deployment Targets

This starter is designed for Netlify-first static deployment.

## Netlify output

- Netlify: `docs/.vitepress/dist`

## Build contract

Use `pnpm deploy:netlify` and ensure the project root remains the repository root so the generated `#contentrain` client is available during build.
