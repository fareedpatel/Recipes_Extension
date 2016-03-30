'use strict';

var CreateRecipe = require('./newrecipe.js');

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
describe('recipesApp', function() {

  it('should automatically redirect to /recipes-view when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/index");
  });

  describe('/recipes', function() {

    var recipe;

    beforeEach(function() {
      recipe = new CreateRecipe();
    });

    it('should be able to add recipes', function(){
      browser.get('index.html');
      recipe.newRecipe("Chicken", "chicken", "cook", "40");
      expect(element.all(by.css('[ng-view] a')).last().getText()).toMatch(/Chicken/);
    });

    it('should have ingredients', function() {
      browser.get('index.html');
      recipe.newRecipe("Pizza", "dough, cheese, tomato", "cook", "20");
      element(by.id("Pizza")).click();
      expect(element.all(by.css('[ng-view]')).getText()).toMatch(/dough, cheese, tomato/);
    });

    it('should have instructions', function() {
      browser.get('index.html');
      recipe.newRecipe("Cake", "flour, sugar, milk", "cook for 30 minutes", "30");
      element(by.id("Cake")).click();
      expect(element.all(by.css('[ng-view]')).getText()).toMatch(/cook for 30 minutes/);
    });

    it('should have a preparation time', function() {
      browser.get('index.html');
      recipe.newRecipe("Pasta", "pasta, tomato", "cook for 20 minutes", "20");
      element(by.id("Pasta")).click();
      expect(element.all(by.css('[ng-view]')).getText()).toMatch(/20/);
    });

    it('should be able to delete recipes', function(){
      browser.get('index.html');
      recipe.newRecipe("chickentikkamasala");
      element(by.id("chickentikkamasala")).click();
      element(by.id("Delete_recipe")).click();
      element(by.id("See_recipe")).click();
      expect(element(by.id("chickentikkamasala")).isPresent()).toBe(false);
    });

    it('should have a video link', function() {
      browser.get('index.html');
      recipe.newRecipe("VideoTest","cheese", "See video", "40", "https://www.youtube.com/watch?v=2kl3Liy5jcQ");
      element(by.id("VideoTest")).click();
      expect(element(by.id('myLink')).getAttribute('ng-src')).toEqual("https://www.youtube.com/embed/2kl3Liy5jcQ");
    });

    it('should filter recipe list by name', function() {
      browser.get('index.html');
      recipe.newRecipe("Ham","ham","Eat", "1");
      var input = element(by.model('query'));
      input.sendKeys('Ham');
      expect(element(by.id("chickentikkamasala")).isPresent()).toBe(false);
      expect(element(by.id("Ham")).isPresent()).toBe(true);
    });

    it('should filter recipe list by ingredients', function() {
      browser.get('index.html');
      recipe.newRecipe("Cheese Sandwich", "cheese, bread");
      recipe.newRecipe("Bacon Sandwich", "bacon, bread");
      recipe.newRecipe("Cereal", "cereal, milk");
      var input = element(by.model('ingredientValue'));
      input.sendKeys('bread');
      expect(element(by.id("Cereal")).isPresent()).toBe(false);
      expect(element.all(by.css('[ng-view] a')).first().getText()).toMatch(/Cheese Sandwich/);
      expect(element.all(by.css('[ng-view] a')).last().getText()).toMatch(/Bacon Sandwich/);
    });
  });
});
