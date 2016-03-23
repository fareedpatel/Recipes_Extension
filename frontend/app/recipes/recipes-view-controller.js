'use strict';

angular.module('recipesApp.viewrecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {
    templateUrl: 'recipes/recipes-view.html',
    controller: 'ViewRecipesCtrl'
  });
}])

.controller('ViewRecipesCtrl', [ "$scope", "$http", function($scope, $http) {
 	$http.get('http://localhost:3000/recipes.json').success(function(data){
 		$scope.recipes = data
 	});
}]);