export default {
  "content": "# Starter Contracts\n\n## Public starter files\n\nA published starter should keep only files that are useful to the adopter:\n\n- `package.json`\n- framework config files\n- `.contentrain/` models and content\n- generated `#contentrain` client\n- starter-specific README\n- CI workflow\n- license and editor config files\n\n## Source-only files\n\nSome files belong only in the source monorepo and should not be shipped in exported starter repositories:\n\n- `contentrain.seed.json`\n- `contentrain.starter.json`\n- `starter.manifest.json`\n- `starter.release.json`\n\n## Why this separation matters\n\nPublished starter repositories should stay easy to understand. Runtime content, schema, and deploy configuration belong in the public repo. Internal release metadata and source seeding files do not.",
  "description": "Manifest, release, and validation rules that every starter in this repo follows.",
  "order": 2,
  "sidebar_label": "Starter Contracts",
  "slug": "starter-contracts",
  "title": "Starter Contracts"
}
