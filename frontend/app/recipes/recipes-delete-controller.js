'use strict';

angular.module('recipesApp.deleterecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/delete/:recipeId', {
    templateUrl: '/recipes/recipes-details.html',
    controller: 'DeleteRecipesCtrl'
  });
}])
.controller('DeleteRecipesCtrl', [ "$scope", "$http", "$routeParams", "$location", "DeleteRecipesService", function($scope, $http, $routeParams, $location, DeleteRecipesService) {
  var number = $routeParams.recipeId
  $scope.deleteRecipe = function() {
  	 var callBack = function(data,status){
  		$location.path('/recipes');
  	}
  	DeleteRecipesService.eliminateRecipe(number, callBack)
  // var number = $routeParams.recipeId
 	// $http.delete('http://localhost:3000/recipes/' + number + '.json').success(function(data){
 	// 	$location.path('/recipes')
 }
}]);