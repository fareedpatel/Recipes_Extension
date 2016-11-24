'use strict';

/**
 * @ngdoc function
 * @name Recipes-Project.controller:UserSessionsCtrl
 * @description
 * # UserSessionsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('recipesApp.usersessions', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sign_in', {
      templateUrl: 'views/user_sessions/new.html',
      controller: 'UserSessionsCtrl'
    });
  }])
  .controller('UserSessionsCtrl', ['$scope', function ($scope) {
  }]);
