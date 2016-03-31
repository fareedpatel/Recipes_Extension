'use strict';
angular.module('recipesApp.voterecipe')
.service('VoteUp', function($http){
	return {

		getVotesUp: function(number, callBack1) {
		$http.post('http://localhost:3000/recipes/' + number +'/like.json').success(function(data, status){   			  
		callBack1(data,status)  
   		});			
		}
	}
})