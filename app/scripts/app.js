'use strict';

/**
 * @ngdoc overview
 * @name syntaxsofts
 * @description
 * # syntaxsofts
 *
 * Main module of the application.
 */
angular
  .module('syntaxsofts', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      // .otherwise({
      //   redirectTo: '/'
      // });
  });
