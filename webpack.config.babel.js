import CopyWebpackPlugin from 'copy-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

const config = process.env.NODE_ENV === 'production' ?
  require('./webpack.config.prod.babel.js') :
  require('./webpack.config.dev.babel.js');

const common = {
  context: __dirname,
  entry: {
    bundle: './src/index.jsx',
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint' },
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.json/, loader: 'json' },
      { test: /\.(eot|ttf|woff|woff2)$/, loader: 'file?name=material-design-icons/iconfont/[name].[ext]' },
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url?limit=10000' },
    ],
  },
  stats: {
    colors: true,
    reasons: false,
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: { glob: './src/static/**', dot: true }, to: '[name].[ext]' },
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

module.exports = merge(common, config);
