---
title: Service Level Objectives
tags:
  - sre
  - reliability
  - observability
date: 2026-04-17
difficulty: Intermediate
order: 2
---

## Core idea

SLOs define the target reliability users should experience, not just the raw uptime a system might achieve.

## Revision points

- SLIs are measurements.
- SLOs are targets.
- Error budgets create room for balancing delivery speed with reliability.

```txt
SLI: 99.92% of API requests return under 300ms
SLO: Maintain that performance over a rolling 30-day window
```

## What to remember

If the metric does not connect to user experience, it is probably the wrong reliability target.
