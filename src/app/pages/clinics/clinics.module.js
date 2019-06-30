/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.clinics', ['ServicesModule'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('clinics', {
          url: '/clinics',
          template: '<div></div>',
          //templateUrl: 'app/pages/mainPage/mainPage.html',
          title: 'Clinics',
          sidebarMeta: {
            icon: 'fa-bank',
            order: 0,
          },
        });
  }

})();
