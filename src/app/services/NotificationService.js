(function () {
  'use strict';

  var NotificationService = function NotificationService($http, ServiceConfig) {

    this.getNotifications = function getNotifications(callbackFunc) {
      $http.get(ServiceConfig.serverUrl + 'course.php')
        .then(function successCallback(response) {
          console.log(response);
          return callbackFunc(response.data);
        }, function errorCallback(response) {
          console.log(response);
          console.log(response.status)
        });
    };
  };

  angular.module('ServicesModule')
    .service('NotificationService', NotificationService);

})();
