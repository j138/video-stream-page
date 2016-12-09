module.exports = {
  context: __dirname,
  entry: {
    png: ['./src/favicon.png'],
    json: ['./src/users.json'],
    jsx: './src/index.jsx',
    css: ['./src/main.css', './src/videojs-custom.css'],
    html: './src/index.html',
    static: ['./src/.htaccess'],
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
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jpe?g$|\.png$/, loader: 'url-loader' },
      { test: /\.gif$|\.svg$|\.woff$|\.ttf$|\.html$|\.css$|\.swf$/, loader: 'file?name=[name].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
      { test: /\.htaccess$/, exclude: /node_modules/, loader: 'file?name=[name].[ext]' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
