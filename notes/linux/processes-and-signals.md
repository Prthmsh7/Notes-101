---
title: Processes and Signals
tags:
  - linux
  - shell
  - debugging
date: 2026-04-17
difficulty: Intermediate
---

## Core idea

Linux process control is easier when you understand PIDs, foreground/background jobs, and common signals.

## Revision points

- `ps`, `top`, and `htop` help inspect process state.
- `SIGTERM` asks a process to stop cleanly.
- `SIGKILL` forcefully terminates when cleanup is no longer possible.

```bash
ps aux | grep node
kill -TERM 12345
```

## What to remember

Use the gentlest signal that solves the problem.
