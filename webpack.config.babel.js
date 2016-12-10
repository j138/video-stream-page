import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
  context: __dirname,
  entry: {
    json: ['./src/users.json'],
    jsx: './src/index.jsx',
    css: ['./src/main.css', './src/videojs-custom.css'],
    html: './src/index.html',
    // static: ['./src/.htaccess'],
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
      { test: /\.css$/, loader: extractCSS.extract('css') },
      { test: /\.jpe?g$|\.png$/, loader: 'url' },
      { test: /\.gif$|\.svg$|\.woff$|\.ttf$|\.html$|\.json$|\.htaccess$/, loader: 'file?name=[name].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel'] },
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
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
