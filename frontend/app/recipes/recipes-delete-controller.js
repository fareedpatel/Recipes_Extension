'use strict';

angular.module('recipesApp.deleterecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/delete/:recipeId', {
    templateUrl: '/recipes/recipes-details.html',
    controller: 'DeleteRecipesCtrl'
  });
}])

.controller('DeleteRecipesCtrl', [ "$scope", "$http", "$routeParams", "$location", "DeleteRecipesService", function($scope, $http, $routeParams, $location, DeleteRecipesService) {
  
  var recipeId = $routeParams.recipeId

  $scope.deleteRecipe = function() {
  	 var callBack = function(data,status){
  		$location.path('/recipes');
  	}
  DeleteRecipesService.eliminateRecipe(recipeId, callBack)
 }
}]);