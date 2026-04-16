---
title: Resource Ownership in C++
tags:
  - cpp
  - memory
  - raii
date: 2026-04-17
difficulty: Advanced
---

## Core idea

In modern C++, ownership should be explicit. Prefer RAII so resources are acquired in constructors and released in destructors.

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
