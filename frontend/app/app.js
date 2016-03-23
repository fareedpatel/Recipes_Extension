'use strict';

// Declare app level module which depends on views, and components
angular.module('recipesApp', [
  'ngRoute',
  'recipesApp.recipes'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/recipes'});
}]);
