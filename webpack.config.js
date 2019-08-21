var path = require('path');

var join = path.join;

var PATHS = {
  src: join(__dirname, 'src'),
  dist: join(__dirname, 'dist'),
};

module.exports = {
  mode: 'development',
  entry: {
    bottom: join(PATHS.src, 'index.ts'),
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
