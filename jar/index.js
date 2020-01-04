Liferay.Loader.define("ng-adapter@1.0.0/index", ['module', 'exports', 'require', 'portlet-dll', './ng-adapter/polyfills', './ng-adapter/polyfills-es5', './ng-adapter/runtime', './ng-adapter/main', './adapt-rt'], function (module, exports, require) {
  var define = undefined;
  const polyfills = require("./ng-adapter/polyfills");
  const runtime = require("./ng-adapter/runtime");
  const main = require("./ng-adapter/main");
  const _ADAPT_RT_ = require("./adapt-rt");
  const portletDll = Arena.portletDll;

  if (Liferay.Browser.isIe()) {
    const polyfillsEs5 = require("./ng-adapter/polyfills-es5");
    polyfillsEs5(null, null, portletDll);
  }
  polyfills(null, null, portletDll);
  runtime(null, null, portletDll);
  module.exports = function (_LIFERAY_PARAMS_) {
    main(_LIFERAY_PARAMS_, _ADAPT_RT_, portletDll);
  };
});
