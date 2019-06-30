(function () {
  'use strict';

  var CourseService = function CourseService($http, ServiceConfig) {

    this.getCourses = function getCourses(callbackFunc) {
      $http.get(ServiceConfig.serverUrl + 'course.php?uid=3') //TODO исправить адрес
        .then(function successCallback(response) {
          console.log(response);
          return callbackFunc(response.data);
        }, function errorCallback(response) {
          console.log(response);
          console.log(response.status)
        });
    };

    this.addCourse = function addCourse(course, callbackFunc) {
      //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      // добавим курс лечения
      console.log('ЗАРОС: ' + ServiceConfig.serverUrl
        + 'inserttreatment.php?uid=3&name=' + course.title + '&description=' + course.description);

      var activityCount = course.activities.length;
      var currentCount = 0;

      $http.get(ServiceConfig.serverUrl
        + 'inserttreatment.php?uid=3&name=' + course.title + '&description=' + course.description)
        .then(function successCallback(response) {
          console.log(response.data);
          course.activities.forEach(function (activity, i, arr) {
            console.log('ЗАРОС добавление активности: ' + ServiceConfig.serverUrl
              + 'insertactivity.php?tid='+ response.data.tid +'&name=' + activity.title + '&doza='
              + activity.description + '&begin=' + activity.startDate + '&end=' + activity.endDate + '&period='
              + activity.period + '&illness=2305');
            $http.get(ServiceConfig.serverUrl
              + 'insertactivity.php?tid='+ response.data.tid +'&name=' + activity.title + '&doza='
              + activity.description + '&begin=' + activity.startDate + '&end=' + activity.endDate + '&period='
              + activity.period + '&illness=2305')
              .then(function successCallback(response) {
                console.log('Activity added: '+ response.data.aid);
                currentCount++;
                if (currentCount == activityCount) {

                  console.log("All activities added!");
                  callbackFunc();
                }
              }, function errorCallback(response) {
                console.log(response);
                console.log(response.status)
              });
          });
        }, function errorCallback(response) {
          console.log(response);
          console.log(response.status)
        });
    };
  };

  angular.module('ServicesModule')
    .service('CourseService', CourseService);

})();
