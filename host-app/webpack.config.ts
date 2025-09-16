import HtmlWebpackPlugin from 'html-webpack-plugin';
import { container } from 'webpack';
const { ModuleFederationPlugin } = container;

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        stats: 'stats@http://localhost:3001/remoteEntry.js',
        chat: 'chat@http://localhost:3002/remoteEntry.js',
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
