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
      $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      // добавим курс лечения
      console.log('ЗАРОС: ' + ServiceConfig.serverUrl
        + 'inserttreatment.php?uid=3&name=' + course.title + '&description=' + course.description);
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
              }, function errorCallback(response) {
                console.log(response);
                console.log(response.status)
              });
          });
//insertactivity.php?tid=2320&name=Poloskanie%20rta&doza=1&cup&begin=2019-06-30 21:00:00&end=2019-07-06 21:00:00&period=24&illness=2305
          //return callbackFunc(response.data);
        }, function errorCallback(response) {
          console.log(response);
          console.log(response.status)
        });
    };
  };

  angular.module('ServicesModule')
    .service('CourseService', CourseService);

})();
