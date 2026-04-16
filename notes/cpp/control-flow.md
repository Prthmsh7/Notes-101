---
title: Control Flow
tags:
  - cpp
  - beginner
  - conditions
date: 2026-04-17
difficulty: Beginner
order: 4
---

## Core idea

Control flow decides which part of the program runs. This is how programs react to different situations.

## Main tools

- `if` runs code when a condition is true.
- `else` runs when the condition is false.
- `else if` lets you check more than one case.

```cpp
#include <iostream>

int main() {
  int score = 78;

  if (score >= 90) {
    std::cout << "Excellent\n";
  } else if (score >= 60) {
    std::cout << "Pass\n";
  } else {
    std::cout << "Needs more practice\n";
  }
}
```

## Revision points

- Conditions usually compare values with operators like `>`, `<`, `==`, and `!=`.
- Curly braces help group the code that belongs to each branch.
- Read the condition like a question: "Is this true?"
- Start with `if` and `else` before worrying about complex branching.

## What to remember

Control flow makes programs feel smart because they can choose what to do next.

## Next step

Once decisions feel clear, loops help you repeat work without copying code.
