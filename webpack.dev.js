const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    client: {
      logging: 'error',
      overlay: true,
      progress: true,
    },
  },
});
