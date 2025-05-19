# Bun + Express + TypeScript Starter

A minimal template to kickstart your next project using [Bun](https://bun.sh/), [Express](https://expressjs.com/), and [TypeScript](https://www.typescriptlang.org/).

## Features

- ⚡ Super-fast runtime with Bun
- 🚀 Express for robust HTTP APIs
- 🛡️ TypeScript for type safety
- 🔥 Hot reload (with Bun's built-in watcher)
- 📦 Easy dependency management

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed (`bun --version`)
- Node.js (optional, for tooling)

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Start

```bash
bun run start
```

## Project Structure

```
.
├── src/
│   └── index.ts      # Entry point
├── tsconfig.json     # TypeScript config
├── package.json      # Project metadata
└── bun.lockb         # Bun lockfile
```

## Scripts

- `dev` – Start in development mode with hot reload
- `build` – Compile TypeScript
- `start` – Run compiled code

## License

MIT
