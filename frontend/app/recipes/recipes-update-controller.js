'use strict';

angular.module('recipesApp.updaterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId/edit-recipe', {
    templateUrl: 'recipes/update-recipe-form.html',
    controller: 'UpdateRecipesCtrl'
  });
}])

.controller('UpdateRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', "UpdateRecipeService", "GetInfoForUpdateFields", function($scope, $http, $location, $routeParams, UpdateRecipeService, GetInfoForUpdateFields) {
  
  var number = $routeParams.recipeId
  var callBack2 = function(data,status){
     $scope.recipe = data;
  }
  
  GetInfoForUpdateFields.infoRecipe(number, callBack2)
  $scope.editRecipe = function(name, ingredients, instructions, preparation_time, link, callBack) {
    var callBack = function(data,status){
      $location.path('/recipes/'+ number);
    }
    UpdateRecipeService.updateRecipe(name, ingredients, instructions, preparation_time, link, number, callBack)
  }
}]);