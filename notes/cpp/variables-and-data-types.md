---
title: Variables and Data Types
tags:
  - cpp
  - beginner
  - variables
date: 2026-04-17
difficulty: Beginner
order: 3
---

## Core idea

Variables store data, and data types tell C++ what kind of value each variable can hold. This is the first step toward writing programs that actually work with information.

## Common beginner types

- `int` for whole numbers
- `double` for decimal numbers
- `char` for a single character
- `bool` for `true` or `false`
- `std::string` for text

```cpp
#include <iostream>
#include <string>

int main() {
  int age = 20;
  double price = 19.99;
  char grade = 'A';
  bool isReady = true;
  std::string name = "Prathmesh";

  std::cout << name << " is " << age << " years old.\n";
}
```

## Revision points

- A variable has a type, a name, and usually a starting value.
- Choose names that explain the value clearly.
- Use `std::string` when working with words or sentences.
- Start with simple values before combining them inside larger programs.

## What to remember

Pick the simplest type that matches the data you are working with.

## Next step

After variables make sense, control flow shows you how programs make decisions.
