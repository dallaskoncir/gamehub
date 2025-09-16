# GameHub

A micro frontend project demonstrating independent UI modules using Webpack Module Federation. This setup includes a host app and two micro frontends: stats and chat.

## Structure

- `host-app/`: Integrates and renders the micro frontends.
- `stats-app/`: Displays game stats (e.g., score, level).
- `chat-app/`: Handles a simple chat interface.

## Setup

1. Navigate to each folder (`host-app`, `stats-app`, `chat-app`).
2. Run `npm init -y` and `npm i react react-dom webpack webpack-cli webpack-dev-server`.
3. Configure `webpack.config.js` with Module Federation (see individual READMEs).
4. Start each app with `npx webpack serve --port <port>` (e.g., 3000 for host, 3001 for stats, 3002 for chat).

## Purpose

Built to explore micro frontend concepts.
