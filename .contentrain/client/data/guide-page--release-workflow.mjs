export default {
  "content": "# Release Workflow\n\n## Source model\n\nThe monorepo is the source of truth for:\n\n- design tokens\n- content blueprints\n- starter recipes\n- validation and export scripts\n\n## Distribution model\n\nEvery starter is published as its own repository.\n\nThat keeps onboarding simple:\n\n- users clone one starter\n- framework docs stay native\n- examples and release notes stay focused\n\n## Export flow\n\n```bash\npnpm contentrain:prepare\npnpm exec turbo run check build\npnpm export:all\n```\n\n## Public repository defaults\n\nExported starter repos should ship with:\n\n- committed `.contentrain/` content\n- generated SDK client\n- CI workflow\n- `.nvmrc` pinned to Node 22\n- starter-specific README\n- release metadata\n- MIT license\n\n## Publish checklist\n\n1. Push `dist/<starter>` to a public repository.\n2. Enable GitHub template repository mode.\n3. Apply description and topic metadata from `starter.release.json`.\n4. Verify CI passes.\n5. Attach preview deployment when available.",
  "description": "How the monorepo becomes separate public starter repositories.",
  "order": 2,
  "sidebar_label": "Release Workflow",
  "slug": "release-workflow",
  "title": "Release Workflow"
}
