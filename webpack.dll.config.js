var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "development",
  optimization: {
    minimize: false,
    noEmitOnErrors: true
  },
  entry: {
    angular: [
      "@angular/animations",
      "@angular/core",
      "@angular/common",
      "@angular/forms",
      "@angular/router",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "rxjs"
    ],
    // ui: []
  },
  output: {
    path: path.join(__dirname, "./dll"),
    filename: "[name]-dll-es5.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "./dll/", "[name]-manifest.json"),
      name: "[name]"
    })
  ]
};
