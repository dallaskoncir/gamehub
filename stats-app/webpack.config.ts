import HtmlWebpackPlugin from 'html-webpack-plugin';
import { container } from 'webpack';
const { ModuleFederationPlugin } = container;

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3001/',
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'stats',
      library: { type: 'var', name: 'stats' },
      filename: 'remoteEntry.js',
      exposes: {
        './Stats': './src/Stats.js',
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
