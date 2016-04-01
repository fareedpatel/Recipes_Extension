'use strict';
angular.module('recipesApp.updaterecipe')
.service('GetInfoForUpdateFields', function($http){
	return {
		
		infoRecipe: function(number, callBack2) {
			$http.get('http://localhost:3000/recipes/' + number + '.json').success(function(data){
    		callBack2(data,status)
  			});		
		}
	}
})