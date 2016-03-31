'use strict';

angular.module('recipesApp.updaterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId/:recipeName/:recipeInstructions/:recipeIngredients/:recipePreparation_time/edit-recipe', {
    templateUrl: 'recipes/update-recipe-form.html',
    controller: 'UpdateRecipesCtrl'
  });
}])
.controller('UpdateRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    $scope.name = $routeParams.recipeName
    $scope.instructions = $routeParams.recipeInstructions
    $scope.ingredients = $routeParams.recipeIngredients
    $scope.preparation_time = $routeParams.recipePreparation_time
  $scope.editRecipe = function(name, ingredients, instructions, preparation_time, link) {
    var param = JSON.stringify({name, ingredients, instructions, preparation_time, link})
    var number = $routeParams.recipeId
    $http.put('http://localhost:3000/recipes/' + number + '.json', param).success(function(data, status){
      $location.path('/recipes/'+number)
    });
  };
}]);