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
    })
    .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
    })
    .when('/technologies', {
        templateUrl: 'views/technologies.html',
        controller: 'TechnologiesCtrl',
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
    })
    .when('/android', {
        templateUrl: 'views/android.html',
        controller: 'AndroidCtrl',
    })
    .when('/webdesign', {
        templateUrl: 'views/webdesign.html',
        controller: 'WebCtrl',
    })
    .when('/customized', {
        templateUrl: 'views/customized.html',
        controller: 'CustomizedCtrl',
    })
    .when('/salesforce', {
        templateUrl: 'views/salesforce.html',
        controller: 'SalesforceCtrl',
    })
    .when('/domains', {
        templateUrl: 'views/domains.html',
        controller: 'DomainsCtrl',
    })
    .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
    })
    .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
    })
    .when('/404', {
        templateUrl: '404.html'
    })
    .otherwise({
        redirectTo: '/404'
    });
});
