var path = require('path');

var join = path.join;

var PATHS = {
  lib: join(__dirname, 'lib'),
  dist: join(__dirname, 'dist'),
};

module.exports = {
  mode: 'development',
  entry: {
    bottom: join(PATHS.lib, 'index.ts'),
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    libraryTarget: 'umd',
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
    minimize: true,
  },
};
