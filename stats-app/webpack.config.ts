import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    publicPath: 'http://localhost:3001/',
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'stats',
      library: { type: 'var', name: 'stats' },
      filename: 'remoteEntry.js',
      exposes: {
        './Stats': './src/StatsApp.tsx',
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
