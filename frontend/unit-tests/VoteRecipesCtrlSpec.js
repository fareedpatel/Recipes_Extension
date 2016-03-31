describe("VoteRecipesCtrl", function(){
  var ctrl, scope, data, param, location, field
  beforeEach(function(){
    module('recipesApp.voterecipe');
    inject(function($controller, $rootScope, _$httpBackend_, $location, $routeParams){
      $httpBackend = _$httpBackend_;
      routeParams = $routeParams
      params = JSON.stringify({name: field})
      $httpBackend.when('GET',"http://localhost:3000/recipes/1.json", params).respond(200)
      $httpBackend.when('POST',"http://localhost:3000/recipes/1/like.json").respond(200)
      $httpBackend.when('POST',"http://localhost:3000/recipes/1/dislike.json").respond(200)
      location = $location
      scope = $rootScope.$new();
      ctrl = $controller("VoteRecipesCtrl", {$scope: scope, $routeParams: {recipeId: 1}});
    });
  });
  it("sends a request to vote up the backend", function(){
    scope.voteRecipeUp();
    $httpBackend.flush()
    expect(location.path()).toBe('/recipes/1')
    scope.voteRecipeDown();
    $httpBackend.flush()
    expect(location.path()).toBe('/recipes/1')
  });
});