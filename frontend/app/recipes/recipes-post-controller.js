'use strict';
angular.module('recipesApp.postrecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'recipes/add-recipe-form.html',
    controller: 'PostRecipesCtrl'
  });
}])
.controller('PostRecipesCtrl', [ "$scope", "$http", '$location', 'PostRecipeService', function($scope, $http, $location, PostRecipeService) {
  $scope.postRecipe = function(name, ingredients, instructions, preparation_time, link) {
    var callback = function(data,status){
  		$location.path('/recipes');
  	}
  	PostRecipeService.createRecipe(name, ingredients, instructions, preparation_time, link, callback)
  }
}]);