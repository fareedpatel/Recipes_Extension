'use strict';
angular.module('recipesApp.voterecipe')
.service('VoteDown', function($http){
	return {

		getVotesDown: function(number, callBack3) {
		$http.post('http://localhost:3000/recipes/' + number +'/dislike.json').success(function(data, status){   			  
		callBack3(data,status)  
   		});			
		}
	}
})