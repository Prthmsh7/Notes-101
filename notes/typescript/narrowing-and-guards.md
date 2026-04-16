---
title: Narrowing and Type Guards
tags:
  - typescript
  - safety
  - api-design
date: 2026-04-17
difficulty: Intermediate
order: 2
---

## Core idea

TypeScript becomes much more useful when you narrow uncertain values before using them.

## Revision points

- `typeof`, `in`, and custom predicates all help narrowing.
- Unions stay ergonomic when the branches are modeled clearly.
- Good narrowing reduces non-null assertions.

```ts
type Result = { ok: true; data: string } | { ok: false; error: string };

function handle(result: Result) {
  if (result.ok) {
    return result.data.toUpperCase();
  }

  return result.error;
}
```

## What to remember

Push uncertainty to the edges, then narrow aggressively.
