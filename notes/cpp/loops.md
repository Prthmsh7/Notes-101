---
title: Loops
tags:
  - cpp
  - beginner
  - loops
date: 2026-04-17
difficulty: Beginner
order: 5
---

## Core idea

Loops repeat a block of code, which saves you from writing the same instruction again and again.

## Common loop types

- `for` is useful when you know how many times to repeat.
- `while` is useful when repetition depends on a condition.

## `for` loop example

```cpp
#include <iostream>

int main() {
  for (int i = 1; i <= 5; i++) {
    std::cout << "Count: " << i << "\n";
  }
}
```

## `while` loop example

```cpp
#include <iostream>

int main() {
  int count = 1;

  while (count <= 3) {
    std::cout << count << "\n";
    count++;
  }
}
```

## Revision points

- A loop needs a clear stopping condition.
- Update the loop variable, or the loop may never end.
- Start with small counting examples before using loops in bigger programs.

## What to remember

If a task repeats, a loop is usually a better idea than copying code.

## Next step

After loops, functions help you organize repeated logic into reusable blocks.
