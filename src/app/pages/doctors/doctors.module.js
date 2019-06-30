/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.doctors', ['ServicesModule'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('doctors', {
          url: '/doctors',
          template: '<div></div>',
          //templateUrl: 'app/pages/mainPage/mainPage.html',
          title: 'Doctors',
          sidebarMeta: {
            icon: 'ion-heart',
            order: 0,
          },
        });
  }

})();
