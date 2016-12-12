import CopyWebpackPlugin from 'copy-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  context: __dirname,
  entry: {
    jsx: './src/index.jsx',
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint' },
    ],
    loaders: [
      // { test: /\.css$/, loaders: ['style', 'css?modules'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=material-design-icons/iconfont/[name].[ext]' },
      { test: /\.json/, loader: 'json' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel'] },
      { test: /\.jpe?g$|\.png$/, loader: 'url' },
      { test: /\.(gif|html)$/, loader: 'file?name=[name].[ext]' },
    ],
  },
  cache: true,
  debug: true,
  devtool: false,
  stats: {
    colors: true,
    reasons: false,
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/_redirects' },
      { from: './src/.htaccess' },
      { from: './src/users.json' },
    ]),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
