'use strict';

angular.module('recipesApp.updaterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId/edit-recipe', {
    templateUrl: 'recipes/update-recipe-form.html',
    controller: 'UpdateRecipesCtrl'
  });
}])
.controller('UpdateRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', "UpdateRecipeService", function($scope, $http, $location, $routeParams, UpdateRecipeService) {
     var number = $routeParams.recipeId
  $http.get('http://localhost:3000/recipes/' + number + '.json').success(function(data){
    $scope.recipe = data
  });
   
    $scope.editRecipe = function(name, ingredients, instructions, preparation_time, link, callBack) {
    var callBack = function(data,status){
      $location.path('/recipes/'+$routeParams.recipeId);
    }
    UpdateRecipeService.updateRecipe(name, ingredients, instructions, preparation_time, link, number, callBack)
  }
}]);