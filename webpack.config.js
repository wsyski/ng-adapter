const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const entryName = 'portlet';
const pkg = require("./package.json");

module.exports = (config, options) => {

  config.plugins.push(
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.join(__dirname, './src')
    ),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'dll', pkg.name, entryName + '-dll-manifest.json')),
      name: entryName
    }),
    new CopyWebpackPlugin([
      path.join(__dirname, 'dll', pkg.name, entryName + '-dll.js'),
      path.join(__dirname, 'dev', 'js', 'liferay.js')
    ])
  );

  return config;
};
