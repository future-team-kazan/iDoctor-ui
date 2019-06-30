(function () {
  'use strict';

  angular.module('BlurAdmin.pages.courses')
    .controller('CourseAddCtrl', CourseAddCtrl);

  /** @ngInject */
  function CourseAddCtrl($scope, baConfig, $element, layoutPaths, CourseService, $state) {
    // шаблон данных
    $scope.newCourse = {
      title: null,
      description: null,
      activities: [
        {
          id: 1,
          title: null,
          description: null,
          startDate: new Date(),
          endDate: null,
          period: 24
        }
      ]
    };

    $scope.addActivityPanel = function addActivityPanel() {
      var inserted = {
        id: $scope.newCourse.activities.length+1,
        title: null,
        description: null,
        startDate: new Date(),
        endDate: null,
        period: 24
      };
      $scope.newCourse.activities.push(inserted);
    };

    $scope.saveCourse = function saveCourse() {
      CourseService.addCourse($scope.newCourse, function () {
        $state.go('courses');
      })
    };


  }

})();
