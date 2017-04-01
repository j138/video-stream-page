import webpack from 'webpack';

module.exports = {
  devtool: false,
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
