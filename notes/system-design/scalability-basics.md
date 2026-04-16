---
title: Scalability Basics
tags:
  - system-design
  - scaling
  - reliability
date: 2026-04-17
difficulty: Beginner
order: 2
---

## Core idea

Scalability means a system can handle more work without falling apart. This usually involves distributing traffic, reducing repeated work, and removing single points of failure.

## Common ideas

- Horizontal scaling adds more machines.
- Caching reduces repeated expensive work.
- Queues smooth out traffic spikes by handling work asynchronously.

```text
more users -> more requests -> scale app layer -> protect database
```

## Revision points

- Load balancers spread traffic across multiple servers.
- Caches speed up repeated reads.
- Databases often become the hardest component to scale well.

## What to remember

Scaling is not only about speed. It is also about keeping the system stable as demand rises.
