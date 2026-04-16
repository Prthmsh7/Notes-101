---
title: Idempotent Pipelines
tags:
  - data-engineering
  - pipelines
  - reliability
date: 2026-04-17
difficulty: Advanced
---

## Core idea

An idempotent pipeline can be run multiple times without producing inconsistent or duplicated outcomes.

## Revision points

- Stable keys matter.
- Upserts are often safer than blind inserts.
- Recovery becomes easier when each step can be replayed safely.

```sql
merge into analytics.orders as target
using staging.orders as source
on target.order_id = source.order_id
when matched then update set status = source.status
when not matched then insert (order_id, status) values (source.order_id, source.status);
```

## What to remember

Replayability is a reliability feature, not just a convenience.
