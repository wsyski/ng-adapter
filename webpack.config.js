const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      path.join(__dirname, 'dll', 'angular-dll-es5.js')
    ]),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'dll', 'angular-manifest.json'))
    }),
  ]
};
