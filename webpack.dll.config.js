const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");

module.exports = {
  mode: "development",
  context: process.cwd(),
  resolve: {
    modules: [__dirname, 'node_modules']
  },
  optimization: {
    minimize: false,
    noEmitOnErrors: true
  },
  entry: {
    portlet: [
      "@angular/animations",
      "@angular/common",
      "@angular/core",
      "@angular/forms",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "@angular/router",
      'rxjs',
      "zone.js/dist/zone"
    ]
  },
  output: {
    path: path.join(__dirname, "dll", pkg.name),
    filename: "[name]-dll.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join("dll", pkg.name, "[name]-dll-manifest.json"),
      name: "[name]",
      entryOnly: true
    }),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.join(__dirname, './src')
    )
  ]
};
