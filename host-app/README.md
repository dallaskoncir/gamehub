# Host App

The main application that integrates and renders the `stats-app` and `chat-app` micro frontends using Webpack Module Federation.

## Setup

1. Run `npm init -y` and `npm i react react-dom webpack webpack-cli webpack-dev-server`.
2. Create `webpack.config.js` to remote `stats-app` and `chat-app` (e.g., expose ports 3001 and 3002).
3. Start with `npx webpack serve --port 3000`.
