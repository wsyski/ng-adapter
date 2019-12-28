const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (config, options) => {
  config.resolve= {
    modules: ['node_modules']
  };

  config.plugins.push(
    new webpack.DllReferencePlugin({
      manifest: require(path.join(__dirname, 'dll', 'vendor-manifest.json'))
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      path.join(__dirname, 'dll', 'vendor.js')
    ])
  );

  return config;
};

