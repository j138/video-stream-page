import webpack from 'webpack';

module.exports = {
  devtool: false,
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
