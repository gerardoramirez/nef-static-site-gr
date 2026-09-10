---
title: Tikal — structural alignment for AI coding agents
description: A reusable framework that gives coding assistants a thin router, stack-specific guardrails, and session telemetry — instead of one bloated prompt for every repo.
author: Gerardo Ramirez
date: 2026-09-09
type: essay
tags: [ai, coding-agents, tooling, architecture]
draft: false
---

AI coding assistants are useful in the same way a talented contractor is useful: they move fast, they can do a lot, and they will happily apply the wrong playbook if you hand them every instruction you have ever written.

[Tikal](https://github.com/gerardoramirez/tikal) is my attempt to treat that problem as a systems problem. It is a reusable framework for the instructions, workflows, and scripts you share with assistants like Claude Code, Cursor, Copilot, and Windsurf. The repo is open source under Apache 2.0.

The name is not an accident. Tikal is a place of alignment — plazas, axes, and monuments that only make sense together. The toolkit is meant to do the same for agent context: keep a small always-on core, then load only the stack that matches the project in front of you.

## The problem it is trying to solve

Most teams start with a single `CLAUDE.md` or editor rule file. It grows. Flutter guidance sits next to Astro commands. Review checklists for one language leak into another. The agent reads more than it needs, and the human spends more time maintaining prose than shipping software.

Tikal inverts that. Agents load a **thin router**, then only the documents that belong to this checkout. A Flutter app does not pull Python guidance. The framework repo itself does not pull application-stack guidance.

## How context is selected

A consuming repo keeps a small allow-list at the root, outside the toolkit, so a submodule checkout stays clean:

```yaml
project:
  name: trail_app
  types:
    - astro
```

That file is `tikal.yaml`. From it, Tikal expands implied stacks (`astro` always brings `typescript`, then `astro`) and points the agent at:

- `tikal.project.md` — this app’s overview, build commands, and layout
- `processes/rules-of-engagement.md` — communication, complexity, and test standards
- stack folders under `ai-coding-tools/stacks/` — only what is listed or implied

If `tikal.yaml` is missing, the resolver infers types from markers such as `pubspec.yaml`, `astro.config.*`, or `tsconfig.json`. You can confirm the active set with:

```bash
python3 ai-coding-tools/scripts/resolve_stack.py
```

## What lives where

The toolkit lives in `ai-coding-tools/`. The consuming repo stays responsible for the things that are *about this product*:

- `tikal.yaml` — stack allow-list
- `tikal.project.md` — project overview (copied from a template on init)
- `plans/` — implementation plans for this repo, never inside the toolkit
- Thin entrypoints — `CLAUDE.md`, `.cursor/rules/tikal.mdc`, Copilot instructions, Windsurf rules — that only point at the router

Inside the toolkit: the getting-started router, optional workflows (refactoring, benchmarking, git), stack docs, and scripts for init, stack resolution, commit-path guards, instruction reload, and session summaries.

Known `--type` values today are `flutter`, `typescript`, and `astro`.

## Getting started

Link or submodule the **inner** `ai-coding-tools/` directory so paths stay `ai-coding-tools/processes/...`:

```bash
git submodule add https://github.com/gerardoramirez/tikal.git vendor/tikal
ln -s vendor/tikal/ai-coding-tools ai-coding-tools
python3 ai-coding-tools/scripts/init_project.py --type astro
```

A local symlink works the same way if you already have a clone. `init_project.py` writes config, copies the project overview, and installs the editor entrypoints.

Claude Code hooks can reload changed process files on each prompt and write a session summary when the agent stops. Tests live with the toolkit:

```bash
python3 -m unittest discover -s ai-coding-tools/tests -v
```

## Why I built it this way

I want agents to be constrained the way good architecture constrains a team: not by forbidding work, but by making the next right context cheap and the wrong context expensive.

Put this app’s commands in `tikal.project.md`, not in the router. Put plans in `plans/`. Add a stack as `ai-coding-tools/stacks/<type>/` and list it in `tikal.yaml`. Customize `rules-of-engagement.md` when the team’s start tokens, comments, or test naming change.

The source of truth is the repository: **[github.com/gerardoramirez/tikal](https://github.com/gerardoramirez/tikal)**.
