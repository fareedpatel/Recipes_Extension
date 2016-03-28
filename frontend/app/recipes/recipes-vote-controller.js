'use strict';

angular.module('recipesApp.voterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipes/recipes-details.html',
    controller: 'VoteRecipesCtrl'
  });
}])

.controller('VoteRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
 $scope.voteRecipeUp = function() {
  var number = $routeParams.recipeId
  $http.post('http://localhost:3000/recipes/' + number +'/like.json').success(function(data, status){
    $location.path('/recipes')
    });
  };
  $scope.voteRecipeDown = function() {
  var number = $routeParams.recipeId
  $http.post('http://localhost:3000/recipes/' + number +'/dislike.json').success(function(data, status){
    $location.path('/recipes')
    });
  };
 }]);