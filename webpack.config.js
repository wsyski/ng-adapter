const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (config, options) => {
  config.plugins.push(
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'dll', 'ng_runtime-manifest.json'))
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      path.join(__dirname, 'dll', 'ng_runtime.dll.js')
    ])
  );

  return config;
};

