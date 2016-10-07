module.exports = {
  context: __dirname,
  entry: {
    jsx: './src/index.jsx',
    css: './src/main.css',
    html: './src/index.html',
  },

  output: {
    path: `${__dirname}/static`,
    publicPath: 'http://stream.miyahira.me/',
    filename: 'bundle.js',
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    host: 'stream.miyahira.me'
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.json$/, loader: 'file?name=[name].[ext]' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: 'file?name=[name].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};


