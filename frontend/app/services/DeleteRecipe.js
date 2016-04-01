'use strict';
angular.module('recipesApp.deleterecipes')
.service('DeleteRecipesService', function($http){
	return {
		eliminateRecipe: function(recipeId, callBack) {
   			$http.delete('http://localhost:3000/recipes/' + recipeId + '.json').success(function(data,status){
 			callBack(data,status)
   			});			
		}
	}
})