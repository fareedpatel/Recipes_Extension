'use strict';

angular.module('recipesApp.updaterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId/:recipeName/:recipeInstructions/edit-recipe', {
    templateUrl: 'recipes/update-recipe-form.html',
    controller: 'UpdateRecipesCtrl'
  });
}])

.controller('UpdateRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
$scope.name = $routeParams.recipeName
$scope.instructions = $routeParams.recipeInstructions
//$scope.link = $routeParams.recipeLink
 $scope.editRecipe = function(name, instructions, link) {
  var param = JSON.stringify({name, instructions, link})
  var number = $routeParams.recipeId
  $http.put('http://localhost:3000/recipes/' + number + '.json', param).success(function(data, status){
    $location.path('/recipes/'+number)
    });
  };
 }]);