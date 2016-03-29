describe('ViewRecipesCtrl', function(){
  var ctrl, scope, $httpBackend
  var data = [{id: 1, name: "Pizza margarita", ingredients: "dough, tomato, cheese", instructions: "boil for ages", preparation_time: 20 },
   {id: 2, name: "rotten food", ingredients: 'cheese, liver', instructions: "eat it raw", preparation_time: 1}]

  beforeEach(function(){
    module('recipesApp.viewrecipes');
    inject(function($controller, $rootScope, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:3000/recipes.json').respond(data)
      scope = $rootScope.$new();
      ctrl = $controller('ViewRecipesCtrl', {$scope:scope})
    });
  });


  it('has a attribute called $scope.recipes that returns an object from api', function(){
  	scope.viewRecipes()
  	$httpBackend.flush()
    expect(scope.recipes).toEqual(data)
  })
  it('has an object called $scope.recipes that contains the name of a recipe from api', function(){
    scope.viewRecipes()
    $httpBackend.flush()
    expect(scope.recipes[0].name).toEqual('Pizza margarita')
  })
  it('has an object called $scope.recipes that contains the ingredients of a recipe from api', function(){
    scope.viewRecipes()
    $httpBackend.flush()
    expect(scope.recipes[0].ingredients).toEqual('dough, tomato, cheese')
  })
  it('has an object called $scope.recipes that contains the instructions of a recipe from api', function(){
    scope.viewRecipes()
    $httpBackend.flush()
    expect(scope.recipes[0].instructions).toEqual('boil for ages')
  })
    it('has an object called $scope.recipes that contains the preparation time of a recipe from api', function(){
    scope.viewRecipes()
    $httpBackend.flush()
    expect(scope.recipes[0].preparation_time).toEqual(20)
  })
});
