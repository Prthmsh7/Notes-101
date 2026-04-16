---
title: Event Loop Revision Checklist
tags:
  - javascript
  - async
  - runtime
date: 2026-04-17
difficulty: Intermediate
---

## Core idea

JavaScript handles async work by coordinating the call stack, task queues, and microtask queues.

## Revision points

- `Promise.then` callbacks run in the microtask queue.
- `setTimeout` callbacks enter the task queue.
- The browser or runtime drains microtasks before moving to the next task.

```js
console.log("start");

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

console.log("end");
```

Expected order: `start`, `end`, `promise`, `timeout`.
