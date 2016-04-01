'use strict';
angular.module('recipesApp.postrecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'recipes/add-recipe-form.html',
    controller: 'PostRecipesCtrl'
  });
}])

.controller('PostRecipesCtrl', [ "$scope", "$http", '$location', "PostRecipesService", function($scope, $http, $location, PostRecipesService) {
  $scope.postRecipe = function(name, ingredients, instructions, preparation_time, link, callBack) {
    var callBack = function(data,status){
  		$location.path('#/recipes-view');
  	}
  	PostRecipesService.createRecipe(name, ingredients, instructions, preparation_time, link, callBack)
  }
}]);