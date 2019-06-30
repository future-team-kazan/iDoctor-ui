(function () {
  'use strict';

  angular.module('BlurAdmin.pages.courses')
    .controller('CourseAddCtrl', CourseAddCtrl);

  /** @ngInject */
  function CourseAddCtrl($scope, baConfig, $element, layoutPaths, CourseService) {
    // шаблон данных
    $scope.newCourse = {
      title: 'Title',
      description: 'Описание',
      activities: [
        {
          id: 1,
          title: 'Title',
          description: 'desc',
          startDate: new Date(2019, 5, 30),
          endDate: new Date(2019, 6, 3),
          period: 24
        }
      ]
    };

    $scope.addActivityPanel = function addActivityPanel() {
      var inserted = {
        id: $scope.newCourse.activities.length+1,
        title: 'Title',
        description: null,
        startDate: new Date(2019, 5, 30),
        endDate: null,
        period: 24
      };
      $scope.newCourse.activities.push(inserted);
    };

    $scope.saveCourse = function saveCourse() {
      CourseService.addCourse($scope.newCourse, function (dataResponse) {

      })
    };


  }

})();
