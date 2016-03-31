'use strict';

angular.module('recipesApp.voterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipes/recipes-details.html',
    controller: 'VoteRecipesCtrl'
  });
}])

.controller('VoteRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', 'GetVotes', 'VoteUp','VoteDown', function($scope, $http, $location, $routeParams,GetVotes, VoteUp, VoteDown) {
  
  var number = $routeParams.recipeId
  var callBack2 = function(data,status){
     $scope.recipe = data;
  }
  GetVotes.getVotesRecipe(number, callBack2)

 $scope.voteRecipeUp = function(number, callBack1) {
    var number = $routeParams.recipeId
    var callBack1 = function(data,status){
    $scope.recipe = data
    $scope.$apply
    $location.path('/recipes/'+ number)
    }
    VoteUp.getVotesUp(number,callBack1)
  };

  $scope.voteRecipeDown = function(number, callBack3) {
    var number = $routeParams.recipeId
    var callBack3 = function(data,status){
    $scope.recipe = data
    $scope.$apply
    $location.path('/recipes/'+ number)
    }
    VoteDown.getVotesDown(number,callBack3)
 
  };
 }]);