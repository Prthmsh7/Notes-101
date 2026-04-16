---
title: Functions
tags:
  - cpp
  - beginner
  - functions
date: 2026-04-17
difficulty: Beginner
order: 6
---

## Core idea

Functions let you group code into reusable pieces. This makes programs easier to read, test, and update.

## Function example

```cpp
#include <iostream>

int add(int first, int second) {
  return first + second;
}

int main() {
  std::cout << add(3, 4) << "\n";
}
```

## Revision points

- A function can take inputs called parameters.
- A function can return a result.
- Good function names explain what the function does.
- Keep beginner functions small and focused.

## What to remember

If logic repeats in multiple places, it usually belongs in a function.

## Next step

With functions in place, arrays and strings become easier to work with because you can process collections and text more cleanly.
