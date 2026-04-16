---
title: Resource Ownership in C++
tags:
  - cpp
  - memory
  - raii
date: 2026-04-17
difficulty: Advanced
order: 8
---

## Core idea

In modern C++, ownership should be explicit. This page is intentionally later in the sequence because memory management concepts make much more sense after the basic language flow already feels natural.

## Revision points

- `std::unique_ptr` expresses exclusive ownership.
- `std::shared_ptr` is useful, but adds reference-counting overhead.
- Stack allocation is still the simplest path when lifetime is obvious.

```cpp
#include <memory>

class Logger {
public:
  Logger() { /* open file */ }
  ~Logger() { /* close file */ }
};

int main() {
  auto logger = std::make_unique<Logger>();
}
```

## What to remember

If ownership is unclear, bugs usually follow. Start by asking: who is responsible for cleanup?
