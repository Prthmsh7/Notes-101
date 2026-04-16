---
title: C++ Foundations
tags:
  - cpp
  - beginner
  - setup
date: 2026-04-17
difficulty: Beginner
order: 2
---

## Core idea

C++ programs are built from a few repeated pieces: headers, a `main` function, statements, and basic input or output. Once that shape feels familiar, the rest of the language becomes much less intimidating.

## What a basic program looks like

```cpp
#include <iostream>

int main() {
  std::cout << "Hello, C++!\n";
  return 0;
}
```

## Revision points

- `#include <iostream>` gives access to input and output tools.
- `int main()` is the starting point of the program.
- Statements usually end with a semicolon.
- `return 0;` means the program finished successfully.
- `std::cout` prints values to the console.

## Beginner note

Do not try to memorize every keyword yet. First, get comfortable reading the shape of a small program and understanding where code begins and ends.

## Next step

Once this shape makes sense, move to variables and data types so the program can start storing real values.
