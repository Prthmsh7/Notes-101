---
title: HTTP Caching Primer
tags:
  - backend
  - http
  - performance
date: 2026-04-17
difficulty: Intermediate
---

## Core idea

Caching reduces repeated work, but only when cache headers clearly express freshness and validation rules.

## Revision points

- `Cache-Control` defines freshness.
- `ETag` and `If-None-Match` support validation.
- Not every endpoint should be cached the same way.

```http
Cache-Control: public, max-age=60, stale-while-revalidate=120
ETag: "notes-101-v1"
```

## What to remember

Cache policy is part of API design, not an afterthought.
