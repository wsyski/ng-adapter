const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const entryName = 'portlet';
const pkg = require("./package.json");

module.exports = (config, options) => {

  config.resolve = {
    modules: ['node_modules', path.resolve(__dirname)]
  };

  config.plugins.push(
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(path.join(__dirname, 'dll', pkg.name, entryName + '-dll-manifest.json'))
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      path.join(__dirname, 'dll', pkg.name, entryName + '-dll.js')
    ]),
    new CopyWebpackPlugin([
      path.join(__dirname, 'dev', 'js', 'liferay.js')
    ])
  );

  return config;
};

