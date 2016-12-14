import webpack from 'webpack';

module.exports = {
  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
};
