(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mainPage')
    .controller('MainPageCtrl', MainPageCtrl);

  /** @ngInject */
  function MainPageCtrl($scope, NotificationService) {
    NotificationService.getNotifications(function(dataResponse) {
      $scope.notifictions = dataResponse;
      console.log($scope.dataFromDb);
    });


    $scope.notifictions = [
      {
        "id": 10,
        "type": "drug",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 11,
        "type": "injection",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 12,
        "type": "inspection",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 13,
        "type": "lfp",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 14,
        "type": "analysis",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 15,
        "type": "pressure",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 16,
        "type": "temperature",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 17,
        "type": "procedure",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 10,
        "type": "drug",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 11,
        "type": "injection",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 12,
        "type": "inspection",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 13,
        "type": "lfp",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 14,
        "type": "analysis",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 15,
        "type": "pressure",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 16,
        "type": "temperature",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      },
      {
        "id": 17,
        "type": "procedure",
        "title": "Принять лекарство",
        "description": "Принять B6",
        "datetime": Date.parse("1900-01-01 00:00:00")
      }
    ];
  }

})();
