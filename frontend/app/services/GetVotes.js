'use strict';
angular.module('recipesApp.voterecipe')
.service('GetVotes', function($http){
	return {

		getVotesRecipe: function(number, callBack2) {
   			$http.get('http://localhost:3000/recipes/' + number + '.json').success(function(data, status){
   			  callBack2(data,status)  
   			});			
		}
	}
})