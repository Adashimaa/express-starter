# Bun + Express + TypeScript Starter

A minimal and modern template to kickstart your next project using [Bun](https://bun.sh/), [Express](https://expressjs.com/), and [TypeScript](https://www.typescriptlang.org/).

## 🚀 Features

- ⚡ Ultra-fast runtime with Bun
- 🧩 Express for scalable and efficient HTTP APIs
- 🛡️ TypeScript for static typing and better developer experience
- 🔄 Hot reloading via Bun’s built-in file watcher
- 📦 Seamless and speedy dependency management

## 📦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed (`bun --version`)
- Node.js (optional, for additional tooling support)

### Installation

Install project dependencies:

```bash
bun install
```

### Development

Start the development server:

```bash
bun run server
```

## 🐳 Docker Support

### Build the Docker image

```bash
docker build -t express-starter .
```

### Run the container (first time)

```bash
docker run -p 3000:3000 --name backend express-starter
```

### Start the container (after initial run)

```bash
docker start express-starter
```

### Docker Compose (Optional)

To run with PostgreSQL and PGAdmin4, use Docker Compose:

```bash
docker compose up -d
```

## 📝 License

This project is licensed under the MIT License.
