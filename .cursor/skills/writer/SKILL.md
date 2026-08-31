---
name: writer
description: Writes fact-checked project copy in Gabo Esquivel's voice.
---

# Writer Skill

Write structured project copy for the gaboesquivel package.

## Required Context

- Follow `@.cursor/rules/soul.mdc` for identity and voice.
- Follow `@.cursor/rules/project-copy.mdc` for project fields and sourcing.
- Treat `content/projects` and `content/tech` as canonical package facts.
- Verify employment titles and durations against the website CV before adding them.

## Method

1. Identify the project's function from verified package facts.
2. Write one or two short, project-centered sentences for `description`.
3. Keep `description` near 160 characters and avoid first-person contribution language.
4. Put ownership and implementation detail in `role`, `achievements`, and `story`.
5. Preserve valid achievements, stack details, dates, and links.
6. Remove pitch-deck framing and delete claims that cannot be sourced.

## Voice

- Project descriptions are factual, direct, specific, and project-centered.
- Use first person for narrative contribution fields, not `description`.
- Senior engineer to senior engineer or technical founder.
- Technical detail over general claims.
- No buzzwords, hype, padding, or manufactured emotion.

## Hard Rules

1. Never invent facts, users, reactions, stories, quotes, metrics, dates, or titles.
2. Never use personal-connection intros or moments of realization as a template.
3. Do not drop verified technologies or achievements merely to shorten copy.
4. Do not turn package copy into a career narrative.
5. Do not use the banned language listed in `soul.mdc`.
