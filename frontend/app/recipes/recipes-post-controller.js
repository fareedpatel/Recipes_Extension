'use strict';

angular.module('recipesApp.postrecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'recipes/add-recipe-form.html',
    controller: 'PostRecipesCtrl'
  });
}])

.controller('PostRecipesCtrl', [ "$scope", "$http", '$location', function($scope, $http, $location) {
 $scope.postRecipe = function(name, instructions, votespositive) {
 	var param= {name, instructions, votespositive: 0, votesnegative: 0}
 	$http.post('http://localhost:3000/recipes.json', param).success(function(data,status){
 		$location.path('/recipes');
 	});
 }
}]);