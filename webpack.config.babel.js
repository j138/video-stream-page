import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
  context: __dirname,
  entry: {
    json: ['./src/users.json'],
    jsx: './src/index.jsx',
    css: ['./src/main.css', './src/videojs-custom.css'],
    html: './src/index.html',
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
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=material-design-icons/iconfont/[name].[ext]' },
      { test: /\.css$/, loader: extractCSS.extract('css') },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel'] },
      { test: /\.jpe?g$|\.png$/, loader: 'url' },
      { test: /\.(gif|html|json)$/, loader: 'file?name=[name].[ext]' },
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
    extractCSS,
    new CopyWebpackPlugin([
      { from: './src/_redirects' },
      { from: './src/.htaccess' },
    ]),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
