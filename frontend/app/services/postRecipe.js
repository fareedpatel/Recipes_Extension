'user strict';

angular.module('recipesApp.postrecipe')

.service('PostRecipesService', function($http) {
	return {
		postRecipe: function(name, ingredients, instructions, preparation_time, link) {
			var param= {name, ingredients, instructions, votespositive: 0, votesnegative: 0, preparation_time, link}
			return $http.post('http://localhost:3000/recipes.json', param)
			.success(function(data,status){
			})
		}
	}
})