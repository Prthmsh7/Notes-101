---
title: Arrays and Strings
tags:
  - cpp
  - beginner
  - collections
date: 2026-04-17
difficulty: Beginner
order: 7
---

## Core idea

Arrays store multiple values of the same type, and strings store text. These are useful once you already understand variables, conditions, loops, and functions.

## Array example

```cpp
#include <iostream>

int main() {
  int scores[4] = {85, 90, 78, 92};
  std::cout << scores[0] << "\n";
}
```

## String example

```cpp
#include <iostream>
#include <string>

int main() {
  std::string language = "C++";
  std::cout << "Learning " << language << "\n";
}
```

## Revision points

- Arrays keep items in order.
- Indexing starts at `0`, not `1`.
- `std::string` gives you useful tools like length checking and concatenation.
- Loops are often used to read or print array values one by one.

## What to remember

Use arrays for grouped values and strings for readable text data.

## Next step

After this, you can move into more advanced C++ ideas like ownership and memory management.
