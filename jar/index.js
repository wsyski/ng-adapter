Liferay.Loader.define("ng-adapter@1.0.0/index", ['module', 'exports', 'require', 'angular-portlet-provider', './ng-adapter/polyfills', './ng-adapter/polyfills-es5', './ng-adapter/runtime', './ng-adapter/main'], function (module, exports, require) {
  var define = undefined;
  const polyfills = require("./ng-adapter/polyfills");
  const runtime = require("./ng-adapter/runtime");
  const main = require("./ng-adapter/main");

  var vendor = Arena.vendor;
  if (Liferay.Browser.isIe()) {
    const polyfillsEs5 = require("./ng-adapter/polyfills-es5");
    polyfillsEs5(vendor);
  }
  polyfills(vendor);
  runtime(vendor);

  // Invoke Angular main module passing Liferay's standard entry point arguments.
  module.exports = function (_LIFERAY_PARAMS_) {
    main(_LIFERAY_PARAMS_, vendor);
  };
});
