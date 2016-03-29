'use strict';

angular.module('recipesApp.viewrecipesdetails', ['ngRoute','ngSanitize' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipes/recipes-details.html',
    controller: 'ViewRecipesDetailsCtrl'
  });
}])

.controller('ViewRecipesDetailsCtrl', [ "$scope", "$http", "$routeParams", "$sce", function($scope, $http, $routeParams, $sce) {
  var number = $routeParams.recipeId
 	$http.get('http://localhost:3000/recipes/' + number + '.json').success(function(data){
 		$scope.recipe = data
 		
 		var video = data.link.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, 'www.youtube.com/embed/$1')
 	    $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.movie = {src:video, title:"Egghead.io AngularJS Binding"};
 	});
 	
}]);