'use strict';
// Declare app level module which depends on views, and components
angular.module('recipesApp', [
  'ngRoute',
  'recipesApp.viewrecipes',
  'recipesApp.postrecipe',
  'recipesApp.viewrecipesdetails',
  'recipesApp.deleterecipes',
  'recipesApp.updaterecipe',
  'recipesApp.voterecipe',
  'ngSanitize',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngTouch',
  'ng-token-auth'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/sign_in', {
    templateUrl: 'views/user_sessions/new.html',
    controller: 'UserSessionsCtrl'
  })
  .otherwise({
    redirectTo: '/recipes-view'
  });
}]);