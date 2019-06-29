(function () {
  'use strict';

  var ServiceConfig = function ServiceConfig() {
    return {
      serverUrl: 'http://iminister.site/samodoctor/'
    }
  };

  angular.module('Services', [])
    .factory('ServiceConfig', ServiceConfig);

})();
