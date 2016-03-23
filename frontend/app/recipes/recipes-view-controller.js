'use strict';

angular.module('recipesApp.recipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {
    templateUrl: 'recipes/recipes-view.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ "$scope", function($scope) {
 $scope.recipes = ['chicken','burger','beer']
}]);