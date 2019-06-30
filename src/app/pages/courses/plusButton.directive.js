(function () {
  'use strict';

  angular.module('BlurAdmin.pages.courses')
    .directive('plusButton', plusButton);

  /** @ngInject */
  function plusButton() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/courses/plusButton.html',
      controller: function () {
        $('#backTop').backTop({
          'position': 200,
          'speed': 100
        });
      }
    };
  }

})();