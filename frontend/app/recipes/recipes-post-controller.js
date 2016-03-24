'use strict';

angular.module('recipesApp.postrecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {
    templateUrl: 'recipes/recipes-post.html',
    controller: 'PostRecipesCtrl'
  });
}])

.controller('PostRecipesCtrl', [ "$scope", "$http", '$location', function($scope, $http, $location) {
 $scope.postRecipe = function() {
 	$http.post('http://localhost:3000/recipes.json').success(function(data){
 		$scope.recipes = data;
 		$location.path('/recipes');
 	});
 }
}]);