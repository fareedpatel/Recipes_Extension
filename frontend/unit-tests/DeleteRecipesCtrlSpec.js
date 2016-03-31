describe('DeleteRecipesCtrl', function(){
  var ctrl, scope, location, recipeId
 
  beforeEach(function(){
    module('recipesApp.deleterecipes');
    inject(function($controller, $location, $rootScope, _$httpBackend_, $routeParams){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectDELETE('http://localhost:3000/recipes/1.json').respond(200)
      location = $location
      recipeId = 1
      routeParams = $routeParams
      scope = $rootScope.$new();
      ctrl = $controller('DeleteRecipesCtrl', {$scope:scope, $routeParams:{recipeId:1}})
      var params = {id: 1, name: "Pizza margarita", ingredients: 'dough, tomatoe, cheese', instructions: "Cook 20 minutes", preparation_time: 20, link: "https://www.youtube.com/watch?v=2kl3Liy5jcQ"}
    });
  });
    it('sends a delete request the api', function(){
      scope.deleteRecipe()
      $httpBackend.flush()
      expect(location.path()).toBe("/recipes")

  });
});


