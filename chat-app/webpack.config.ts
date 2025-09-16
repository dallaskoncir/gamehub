import HtmlWebpackPlugin from 'html-webpack-plugin';
import { container } from 'webpack';
const { ModuleFederationPlugin } = container;

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'chat',
      library: { type: 'var', name: 'chat' },
      filename: 'remoteEntry.js',
      exposes: {
        './Chat': './src/Chat.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
