const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    main: './src/index.js',
    // cardsEntry: './src/layout/scripts/category.js',
    // statsEntry: './src/layout/scripts/stats.js'
  },
  output: {
    path: path.resolve(__dirname, 'build', 'target'),
    // publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle_[chunkhash].js',
    sourceMapFilename: '[file].map',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|jpg|png|aac|ogg)$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3002,
    open: true,
    historyApiFallback: true,
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/layout/index.html',
      chunks: ['main'],
    }),
    // new HtmlWebpackPlugin({  // Also generate a cards.html
    //     filename: 'category.html',
    //     template: './src/layout/category.html',
    //     chunks: ['cardsEntry']
    // }),
    // new HtmlWebpackPlugin({  // Also generate a cards.html
    //     filename: 'stats.html',
    //     template: './src/layout/stats.html',
    //     chunks: ['statsEntry']
    // }),
    new CopyPlugin([
      // { from: 'src/layout/audio', to: './audio' },
      { from: 'src/layout/img', to: './img' },
      // { from: 'src/layout/img/*.svg', to: './img' }
    ]),
  ],
};
