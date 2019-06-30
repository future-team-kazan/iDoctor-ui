/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.courses', ['ui.router', 'ServicesModule', 'BlurAdmin.pages.form'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('courses', {
        url: '/courses',
        templateUrl: 'app/pages/courses/courseList.html',
        title: 'Courses',
        controller: 'CourseListCtrl',
        sidebarMeta: {
          icon: 'ion-clipboard',
          order: 0,
        },
      })
      .state('addCourse', {
        url: '/courses/add',
        templateUrl: 'app/pages/courses/addCourse.html',
        title: 'Add new course',
        controller: 'CourseAddCtrl',
      });
  }

})();
