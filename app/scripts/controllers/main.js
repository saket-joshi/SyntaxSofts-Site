'use strict';

/**
* @ngdoc function
* @name syntaxsofts.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the syntaxsofts
*/
angular.module('syntaxsofts')
.controller('MainCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.currentPage = 'home';
}])
.controller('ServicesCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.currentPage = 'services';
}]);
