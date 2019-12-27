var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "development",
  optimization: {
    minimize: false,
    noEmitOnErrors: true
  },
  entry: {
    common: [
      "@angular/animations",
      "@angular/core",
      "@angular/common",
      "@angular/compiler",
      "@angular/forms",
      "@angular/router",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "rxjs"
    ]
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
