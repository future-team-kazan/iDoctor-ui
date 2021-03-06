/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mainPage', ['ServicesModule'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('main', {
          url: '/main',
          templateUrl: 'app/pages/mainPage/mainPage.html',
          title: 'Main',
          controller: 'MainPageCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();
