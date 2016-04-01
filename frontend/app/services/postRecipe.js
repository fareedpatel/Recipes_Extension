'use strict';
angular.module('recipesApp.postrecipe')
.service('PostRecipeService', function($http){
	return {
		createRecipe: function(name, ingredients, instructions, preparation_time, link, callBack) {
			var param= {name, ingredients, instructions, votespositive: 0, votesnegative: 0, preparation_time, link}
   			$http.post('http://localhost:3000/recipes.json', param).success(function(data,status){
   			  callBack(data,status)
   			});			
		}
	}
})