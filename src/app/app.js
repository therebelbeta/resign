angular.module('resign', [
  'ngRoute'
])
  .config(function($routeProvider) {
    'use strict';
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: '/main/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });