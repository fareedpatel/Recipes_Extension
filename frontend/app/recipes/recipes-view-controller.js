'use strict';

var app = angular.module('recipesApp.viewrecipes', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes-view', {
    templateUrl: 'recipes/recipes-view.html',
    controller: 'ViewRecipesCtrl'
  });
}])

app.controller('ViewRecipesCtrl', [ "$scope", "$http", function($scope, $http) {
 $scope.viewRecipes = function() {
 	$http.get('http://localhost:3000/recipes.json').success(function(data){
 		$scope.recipes = data 
    for (var i=0, length=$scope.recipes.length; i<length; i++){
      var recipe = $scope.recipes[i];
      recipe.ingredients = recipe.ingredients.split(", ");
    console.log(recipe.ingredients)}
 	});
 }
}]);
app.filter('searchIngredients', function(){
  return function (recipes, ingredientValue){
    console.log(ingredientValue);
    if (ingredientValue==undefined) return recipes;
    var filtered = [];
    var search = ingredientValue.split(', ');
    console.log(search);
    angular.forEach(recipes, function(recipe){ console.log(recipe);
    for (var i=0, length=search.length; i<length; i++){ console.log(recipe.ingredients);
      if (recipe.ingredients.indexOf(search[i])==-1) return false;
    }
    console.log(recipe);
    filtered.push(recipe); console.log(filtered);
  });
  return filtered;
};  
});