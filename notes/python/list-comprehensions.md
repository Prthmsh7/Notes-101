---
title: List Comprehensions for Fast Transformations
tags:
  - python
  - scripting
  - collections
date: 2026-04-17
difficulty: Beginner
order: 2
---

## Core idea

List comprehensions keep short transformations readable when the operation is simple and the intent is obvious.

## Revision points

- Use them for mapping and filtering.
- Avoid nesting too deeply.
- Prefer explicit loops when the logic becomes hard to scan.

```python
scores = [42, 75, 91, 63]
passed = [score for score in scores if score >= 70]
print(passed)
```

## What to remember

Readable Python wins over clever Python.
