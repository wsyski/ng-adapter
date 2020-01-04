var PATH_CONTEXT = Liferay.ThemeDisplay.getPathContext();

function adaptStaticURL(url) {
  return PATH_CONTEXT + "/o/ng-adapter-1.0.0/ng-adapter/" + url;
}

module.exports = {
  adaptStaticURL
};
