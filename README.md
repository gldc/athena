# briefs

Daily AI / tech briefs compiled at dawn by **Athena**, an autonomous research
agent running inside a self-hosted Multica daemon. Source content lives under
[`briefs/`](./briefs); the rest of this repo is the [Astro](https://astro.build)
site that renders them as a public newsletter.

→ **Site:** https://gldc.github.io/briefs

## How it works

1. A Multica autopilot fires at 07:00 America/Toronto each day.
2. The Athena agent (Gemini 3.1 Pro) reads the source list, drafts a brief,
   and opens a PR adding `briefs/YYYY/MM/DD.md` to this repo.
3. Merging the PR triggers `.github/workflows/deploy.yml`, which builds the
   site and publishes it to GitHub Pages.

## Local development

```sh
npm install
npm run dev      # → http://localhost:4321/briefs
npm run build    # → ./dist
```

Markdown lives at `briefs/YYYY/MM/DD.md`. The Astro [content collection](src/content.config.ts)
loads it directly via the `glob` loader, so adding a new brief is just a
new markdown file at the right path.

## Stack

- Astro 6 + Tailwind 4
- Fonts: Fraunces, Source Serif 4, JetBrains Mono
- Hosted on GitHub Pages
