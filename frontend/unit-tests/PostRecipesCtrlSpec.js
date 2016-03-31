describe('PostRecipesCtrl', function(){
  var ctrl, scope, params, location
  

  beforeEach(function(){
    module('recipesApp.postrecipe');
    inject(function($controller, $location, $rootScope, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      console.log('1')
      $httpBackend.expectPOST('http://localhost:3000/recipes.json', params).respond(200)
      location = $location
      console.log('2')
      scope = $rootScope.$new();
      ctrl = $controller('PostRecipesCtrl', {$scope:scope});
      var params = {id: 1, name: "Pizza margarita", ingredients: 'dough, tomatoe, cheese', instructions: "Cook 20 minutes", preparation_time: 20, link: "https://www.youtube.com/watch?v=2kl3Liy5jcQ"};
    });
  });
  it('send a post request to the api', function(){
    console.log('3')
  	scope.postRecipe()
  	$httpBackend.flush()
    console.log('4')
    expect(location.path()).toBe('/recipes')
  })
});
