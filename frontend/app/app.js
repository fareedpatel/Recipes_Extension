'use strict';

// Declare app level module which depends on views, and components
angular.module('recipesApp', [
  'ngRoute',
  'recipesApp.viewrecipes',
  'recipesApp.postrecipe'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}]);
