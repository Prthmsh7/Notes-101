---
title: Rendering and Hydration
tags:
  - frontend
  - rendering
  - react
date: 2026-04-17
difficulty: Intermediate
---

## Core idea

Rendering determines what HTML is sent or painted. Hydration connects that HTML to interactive client-side behavior.

## Revision points

- Server-rendered HTML improves initial paint.
- Hydration attaches event handlers after the markup arrives.
- Mismatches between server and client output can cause runtime warnings.

```jsx
export default function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

## What to remember

Treat server output and client output as two sides of the same contract.
