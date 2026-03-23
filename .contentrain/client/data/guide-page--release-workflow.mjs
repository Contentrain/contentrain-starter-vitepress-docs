export default {
  "content": "# Release Workflow\n\n## Local verification\n\nBefore deploying this starter, run:\n\n```bash\npnpm check\npnpm build\n```\n\n## Production preview\n\n```bash\npnpm preview\n```\n\n## What ships in the public starter\n\nThis repository is intentionally self-contained:\n\n- committed `.contentrain/` models and content\n- generated `#contentrain` SDK client\n- starter-specific README\n- CI workflow\n- pinned Node version via `.nvmrc`\n- MIT license\n\n## Deploy checklist\n\n1. Connect the repository to your deployment provider.\n2. Use `pnpm install` as the install step.\n3. Use `pnpm build` as the build step.\n4. Set the publish directory to `docs/.vitepress/dist` for static hosts.\n5. Verify navigation, sidebar routes, and search in preview.",
  "description": "How the monorepo becomes separate public starter repositories.",
  "order": 2,
  "sidebar_label": "Release Workflow",
  "slug": "release-workflow",
  "title": "Release Workflow"
}
