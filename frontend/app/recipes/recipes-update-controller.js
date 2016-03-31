'use strict';

angular.module('recipesApp.updaterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId/:recipeName/:recipeInstructions/:recipeIngredients/:recipePreparation_time/edit-recipe', {
    templateUrl: 'recipes/update-recipe-form.html',
    controller: 'UpdateRecipesCtrl'
  });
}])
.controller('UpdateRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', "UpdateRecipeService", function($scope, $http, $location, $routeParams, UpdateRecipeService) {
    $scope.name = $routeParams.recipeName
    $scope.instructions = $routeParams.recipeInstructions
    $scope.ingredients = $routeParams.recipeIngredients
    $scope.preparation_time = $routeParams.recipePreparation_time
    var number = $routeParams.recipeId
    $scope.editRecipe = function(name, ingredients, instructions, preparation_time, link, callBack) {
    var callBack = function(data,status){
      $location.path('/recipes/'+$routeParams.recipeId);
    }
    UpdateRecipeService.updateRecipe(name, ingredients, instructions, preparation_time, link, number, callBack)
  }
}]);