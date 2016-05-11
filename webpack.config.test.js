module.exports = {
  entry: {
    app: ['./test/main.js']
  },
  devtools: 'source-maps',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  output: {
    path: __dirname + '/test/build',
    publicPath: '/',
    filename: 'bundle.js'
  }
};
