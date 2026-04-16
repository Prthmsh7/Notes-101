# Notes-101

A Markdown-driven personal revision system built on Next.js.

## What It Does

- Reads Markdown notes from the local `notes/` directory
- Groups notes by topic folder automatically
- Parses frontmatter metadata like `title`, `tags`, `date`, and `difficulty`
- Lets you browse:
  - all topics
  - all notes inside a topic
  - individual note pages
- Supports syntax-highlighted code blocks
- Includes lightweight search and tag filtering

## Notes Structure

Put your notes inside topic folders:

```text
notes/
  javascript/
    event-loop-checklist.md
  react/
    rendering-model.md
  linux/
    processes-and-signals.md
```

Each note should use frontmatter like this:

```md
---
title: Event Loop Revision Checklist
tags:
  - javascript
  - async
date: 2026-04-17
difficulty: Intermediate
---
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development mode:

```bash
npm run dev
```

3. Open `http://localhost:3000` or the next available port shown by Next.js.

## Important Note

This project is optimized for the local revision workflow in development mode.

The repo also includes a polling-based file watcher in `next.config.js`, so note and code changes are picked up reliably without manually deleting `.next`.
