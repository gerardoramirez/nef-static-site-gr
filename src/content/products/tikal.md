---
title: Tikal
tagline: Structural alignment, guardrails, and telemetry for AI coding agents
description: An open-source framework that routes coding assistants to only the stack docs and workflows that match the repo they are working in.
status: active
tags: [ai, agents, open-source, tooling]
date_launched: 2026-09-09
draft: false
---

[Tikal](https://github.com/gerardoramirez/tikal) is a reusable framework for the instructions, workflows, and scripts you share with AI coding assistants — Claude Code, Cursor, Copilot, Windsurf, and others.

Agents load a thin router, then only the stack guidance that matches the project. A Flutter app does not pull Python notes. The framework repo does not pull application-stack notes.

A consuming checkout keeps `tikal.yaml` as the stack allow-list, `tikal.project.md` as the app overview, and `plans/` for implementation work. The toolkit itself lives in `ai-coding-tools/`.

## Why it exists

Single instruction files grow until every assistant reads the wrong playbook. Tikal treats context as an allow-list: infer or declare project types, expand implied stacks (`astro` includes TypeScript), and keep editor entrypoints thin.

## Start here

- Repository: [github.com/gerardoramirez/tikal](https://github.com/gerardoramirez/tikal)
- Essay: [Tikal — structural alignment for AI coding agents](/writing/tikal-ai-coding-framework)
- License: Apache 2.0
