/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.statistics', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('statistics', {
          url: '/statistics',
          templateUrl: 'app/pages/statistics/statistics.html',
          title: 'Статистика',
          controller: 'StatisticsCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 80,
          },
        });
  }

})();
