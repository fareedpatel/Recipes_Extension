'use strict';

var app = angular.module('recipesApp.viewrecipes', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes-view', {
    templateUrl: 'recipes/recipes-view.html',
    controller: 'ViewRecipesCtrl'
  });
}])

app.controller('ViewRecipesCtrl', [ "$scope",'GetRecipesService', "$http", function($scope, $http, GetRecipesService) {
 $scope.viewRecipes = function() {
 	}
}]);