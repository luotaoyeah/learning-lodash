const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
  {
    entry: path.resolve('src/index.ts'),
    output: {
      path: path.resolve('dist/'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    target: 'node',
    mode: 'production',
    devtool: 'eval-source-map',
    plugins: [new CleanWebpackPlugin()],
  },
];
