(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mainPage')
    .controller('MainPageCtrl', MainPageCtrl);

  /** @ngInject */
  function MainPageCtrl($scope, $uibModal, NotificationService) {
    NotificationService.getNotifications(function(dataResponse) {
      $scope.notifictions = dataResponse;
      console.log($scope.dataFromDb);
    });


    $scope.notifictions = [
      {
        "id": 10,
        "type": "drug",
        "title": "Citromon",
        "description": "Take your medicine after eating",
        "datetime": Date.parse("2019-05-30 08:00:00")
      },
      {
        "id": 11,
        "type": "injection",
        "title": "Insulin",
        "description": "Do injection",
        "datetime": Date.parse("2019-05-30 09:00:00")
      },
      {
        "id": 12,
        "type": "inspection",
        "title": "Dentist",
        "description": "Visit a dentist",
        "datetime": Date.parse("2019-05-30 10:00:00")
      },
      {
        "id": 13,
        "type": "lfp",
        "title": "Physical therapy",
        "description": "Run 1 kilometer",
        "datetime": Date.parse("2019-05-30 11:00:00")
      },
      {
        "id": 14,
        "type": "analysis",
        "title": "Do measurements",
        "description": "You can record measurements to stay in control of your health",
        "datetime": Date.parse("2019-05-30 12:00:00")
      },
      {
        "id": 15,
        "type": "pressure",
        "title": "Pressure measuremen",
        "description": "You can add remember to do measurement of pressure",
        "datetime": Date.parse("2019-05-30 13:00:00")
      },
      {
        "id": 16,
        "type": "temperature",
        "title": "Temperature measurement",
        "description": "You can add remember to measure temperature.",
        "datetime": Date.parse("2019-05-30 14:00:00")
      },
      {
        "id": 17,
        "type": "procedure",
        "title": "Procedures",
        "description": "You can choose the frequency, times a day and hours for your procedures",
        "datetime": Date.parse("2019-05-30 15:00:00")
      }
    ];

    $scope.open = function (page, size) {
      $scope.noted = false;
      $scope.motivation = false;
      $scope.demotivation = false;
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        scope: $scope,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };

    $scope.openMotivation = function openMotivation() {
      console.log("motiv");
      $scope.motivation = true;
      $scope.demotivation = false;
    };

    $scope.openDemotivation = function openDemtivation() {
      console.log("demotiv");
      $scope.motivation = false;
      $scope.demotivation = true;
    };
  }

})();
