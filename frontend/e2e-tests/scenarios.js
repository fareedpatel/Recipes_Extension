'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('recipesApp', function() {


  it('should automatically redirect to /recipes-view when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/index");
  });


  describe('/recipes', function() {

    it('should be able to add recipes', function(){
      browser.get('index.html');
      element(by.id("New_recipe")).click();
      element(by.id('name')).sendKeys("chicken something");    
      element(by.id("submit")).click();
      element(by.id("See_recipe")).click();
      expect(element.all(by.css('[ng-view] p')).getText()).toMatch(/chicken something/)
    })
    it('should have instructions', function() {
      browser.get('index.html');
      element(by.id("New_recipe")).click();
      element(by.id('name')).sendKeys("chicken");
      element(by.id('instructions')).sendKeys("cook for 30 minutes");    
      element(by.id("submit")).click();
      element(by.id("See_recipe")).click();
      element(by.id("chicken")).click();
      expect(element.all(by.css('[ng-view] p')).getText()).toMatch(/cook for 30 minutes/);
    })
  })

});
