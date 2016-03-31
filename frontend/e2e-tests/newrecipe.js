'use strict';

var CreateRecipe = function() {
  this.newRecipe = function(name, ingredients, instructions, preparation_time, link) {
    element(by.id("New_recipe")).click();
    element(by.id('name')).sendKeys(name);
    element(by.id('ingredients')).sendKeys(ingredients);
    element(by.id('instructions')).sendKeys(instructions);
    element(by.id('preparation_time')).sendKeys(preparation_time);
    element(by.id('link')).sendKeys(link);
    element(by.id("submit")).click();
    element(by.id("See_recipe")).click();
  };
};

module.exports = CreateRecipe;