import webpack from 'webpack';

module.exports = {
  debug: false,
  devtool: false,
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
