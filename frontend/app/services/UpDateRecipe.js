'use strict';
angular.module('recipesApp.updaterecipe')
.service('UpdateRecipeService', function($http){
	return {
		updateRecipe: function(name, instructions, ingredients, preparation_time, link, number, callBack) {
			//var param = JSON.stringify({name, ingredients, instructions, preparation_time, link})
			console.log(number)
			var param= {name, ingredients, instructions, preparation_time, link}
   			$http.put('http://localhost:3000/recipes/' + number + '.json', param).success(function(data, status){
   			  callBack(data,status)
   			  
   			});			
		}
	}
})