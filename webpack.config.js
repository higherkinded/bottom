var path = require('path');

var join = path.join;

var PATHS = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};

module.exports = {
  mode: 'production',
  entry: {
    bottom: join(PATHS.src, 'index.ts'),
  },
  target: 'node',
  output: {
    path: PATHS.dist,
    filename: 'index.js',
    libraryTarget: 'commonjs-module',
    library: 'bottom',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
    }],
  },
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    concatenateModules: false,
    minimize: true,
  },
};
