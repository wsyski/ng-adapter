const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const entryName = 'portlet';

module.exports = (config, options) => {

  config.resolve = {
      modules: ['node_modules', path.resolve(__dirname)]
  };

  config.plugins.push(
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(path.resolve(__dirname, 'dll', entryName + '-dll-manifest.json'))
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      path.resolve(__dirname, 'dll', entryName + '-dll.js')
    ])
  );

  return config;
};

