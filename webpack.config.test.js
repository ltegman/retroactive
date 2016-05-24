module.exports = {
  entry: {
    app: ['./test/example.js'],
  },
  devtools: 'inline-source-maps',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  output: {
    path: __dirname + '/test/build',
    publicPath: '/',
    filename: 'bundle.js',
  },
};
