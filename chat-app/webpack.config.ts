import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'chat',
      library: { type: 'var', name: 'chat' },
      filename: 'remoteEntry.js',
      exposes: {
        './Chat': './src/ChatApp.tsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        'react-dom': { singleton: true, requiredVersion: false },
        'react/jsx-runtime': { singleton: true, requiredVersion: false },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
