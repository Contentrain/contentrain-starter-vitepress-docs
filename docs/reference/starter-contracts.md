---
description: The files a public Contentrain starter keeps, and why.
order: 2
sidebar_label: Starter Contracts
slug: starter-contracts
title: Starter Contracts
---

# Starter Contracts

## Public starter files

A published starter should keep only files that are useful to the adopter:

- `package.json`
- framework config files
- `.contentrain/` models and content
- generated `#contentrain` client
- starter-specific README
- CI workflow
- license and editor config files

## Why this separation matters

Published starter repositories should stay easy to understand. Runtime content, schema, and deploy configuration belong in the repository; anything that only served an internal release step does not.
