var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "development",
  optimization: {
    minimize: false,
    noEmitOnErrors: true
  },
  entry: {
    polyfills: [
      'zone.js/dist/zone'
    ],
    vendor: [
      "@angular/animations",
      "@angular/common",
      "@angular/core",
      "@angular/forms",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "@angular/router",
      "rxjs"
    ]
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: "[name]-dll.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve("dll", "[name]-manifest.json"),
      name: "[name]",
      entryOnly: true
    })
  ]
};
