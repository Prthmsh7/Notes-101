---
title: Prompt Evaluation Loop
tags:
  - ai
  - prompts
  - evaluation
date: 2026-04-17
difficulty: Intermediate
---

## Core idea

Prompt quality improves fastest when you evaluate outputs against explicit criteria instead of relying on gut feeling.

## Revision points

- Start with a baseline prompt.
- Define success conditions.
- Compare outputs using the same test set.

```json
{
  "task": "summarize a note",
  "criteria": ["accuracy", "brevity", "coverage"]
}
```

## What to remember

Iteration without evaluation usually becomes guesswork.
