const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      path.join(__dirname, 'angular-dll', 'angular-dll.js')
    ]),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'angular-dll', 'angular-manifest.json'))
    }),
  ]
};
