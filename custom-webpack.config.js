var webpack = require('webpack');
var path = require('path');
module.exports = {
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'angular-dll', 'angular-manifest.json'))
    }),
  ]
};
