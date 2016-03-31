'use strict';
angular.module('recipesApp.deleterecipes')
.service('DeleteRecipesService', function($http){
	return {
		eliminateRecipe: function(number, callBack) {
   			$http.delete('http://localhost:3000/recipes/' + number + '.json').success(function(data,status){
 			callBack(data,status)
   			});			
		}
	}
})