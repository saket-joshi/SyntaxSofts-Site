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
}])
.controller('ProductsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.currentPage = 'products';
}])
.controller('TechnologiesCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.currentPage = 'technologies';
}])
.controller('AboutCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.currentPage = 'about';
}])
.controller('ContactCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.currentPage = 'contact';
}])
.controller('TeamCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.currentPage = 'team';
}]);