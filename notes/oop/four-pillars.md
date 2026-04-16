---
title: The Four Pillars of OOP
tags:
  - oop
  - encapsulation
  - inheritance
date: 2026-04-17
difficulty: Beginner
order: 2
---

## Core idea

The classic four pillars are encapsulation, abstraction, inheritance, and polymorphism. They describe common ways object-oriented code stays manageable.

## The pillars

- Encapsulation keeps related data and behavior together.
- Abstraction hides unnecessary details.
- Inheritance allows one class to build on another.
- Polymorphism lets different objects respond to the same message in different ways.

```cpp
class Animal {
public:
  virtual void speak() const {
    std::cout << "Some sound\n";
  }
};
```

## What to remember

These ideas are helpful, but not every design needs all four. Use them when they make your code easier to reason about.
