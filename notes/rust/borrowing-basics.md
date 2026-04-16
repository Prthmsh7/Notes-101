---
title: Borrowing Basics
tags:
  - rust
  - ownership
  - safety
date: 2026-04-17
difficulty: Intermediate
order: 2
---

## Core idea

Rust separates ownership from borrowing so the compiler can prevent data races and dangling references before runtime.

## Revision points

- One mutable reference or many immutable references.
- References cannot outlive the value they point to.
- Borrow checking pushes lifetime decisions earlier in design.

```rust
fn print_length(value: &String) {
    println!("{}", value.len());
}

fn main() {
    let name = String::from("notes");
    print_length(&name);
}
```

## What to remember

When a Rust API feels strict, it is usually forcing you to clarify ownership boundaries.
