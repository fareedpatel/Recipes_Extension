'use strict';

angular.module('recipesApp.voterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipes/recipes-details.html',
    controller: 'VoteRecipesCtrl'
  });
}])

.controller('VoteRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', 'GetVotes', 'VoteUp', function($scope, $http, $location, $routeParams,GetVotes, VoteUp) {
  
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


  $scope.voteRecipeDown = function() {
  var number = $routeParams.recipeId
  $http.post('http://localhost:3000/recipes/' + number +'/dislike.json').success(function(data, status){
    $scope.recipe = data
    $scope.$apply
    });
  };
 }]);