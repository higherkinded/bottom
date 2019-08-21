var path = require('path');

var join = path.join;

var PATHS = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};

module.exports = {
  mode: 'development',
  entry: {
    bottom: join(PATHS.src, 'index.ts'),
  },
  target: 'node',
  output: {
    path: PATHS.dist,
    filename: 'index.js',
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
    usedExports: true,
    concatenateModules: true,
  },
};
