(function () {
  'use strict';

  angular.module('BlurAdmin.pages.courses')
    .controller('CourseListCtrl', CourseListCtrl);

  /** @ngInject */
  function CourseListCtrl($scope, baConfig, $element, layoutPaths) {
    $scope.courses = [

    ];
  }

})();
