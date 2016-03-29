# Recipes-project

Team members:
-------------

Follow us!

-Eduardo M Sanchez Delgado https://github.com/hedudelgado
-Rebecca Piper https://github.com/RPiper93
-Wim Hekkelman https://github.com/jwhekk
-Fareed Patel https://github.com/fareedpatel


User Stories
------------
:white_check_mark:
```
As a  user
So that I can share my recipe
I want to be able to add a new recipe
```

:construction:
```
As a user
So I can break down my recipe,
I would like to add the ingredients list
```
:white_check_mark:
```
As a user
So I can add know how long takes to cook the recipe,
I would like to add a preparation time.
```
```
As a user
So that I can know the nutritional information
I would like to give information regarding its nutritional content.
```
```
As a user
So others can choose based on dietary categories
I want to be able to add a dietary category to my recipe
```
:white_check_mark:
```
As a user
So people can cook my recipe,
I want to add instructions to my recipe
```

:white_check_mark:
```
As a user
So that I can change my recipe
I want to be able to update my recipe
```
```
As a user
So that others can see what the food looks like
I want to be able to upload a picture
```
```
As a user
So that others can see how to exactly cook the recipe
I want to be able to upload a youtube link
```
:white_check_mark:
```
As a user
So that others can see my recipes
I want to be able to see a list of recipes
```
:white_check_mark:
```
As a user
So that recipes can be removed
I want to be able to delete my recipes
```
```
As recipe owner
To prevent others to change my recipe
You need to be signed
```
```
As a user
So that I can see what I’m looking for
I can search by ingredients (or leftovers)
```
```
As a user
So that I can post my own recipes
I need to sign up
```
```
As a signed in user
So that people understand the popularity of the recipe
I am able to vote up or down
```
```
As a signed in user
So that people understand the issues with the recipe
I am able to leave a comment about the recipe
```
```
As a user,
I would like to see the most popular recipes,
I would like to sort them by number of votes
```
```
As a user,
I would like to see some specific recipes,
I would like to search by its name.
```
```
As a user,
I would like to see recipes by its preparation time,
I would like to search by preparation time.
```
```
As a user,
I would like to see recipes by dietary restrictions
I would like to filter by choices - vegan, vegetarian, gluten free, (pork free).
```
```
As a user,
So that others can see my recipe on social networking sites
I am able to share my recipe to facebook, twitter, tumblr,
```
```
As a user,
So I know I am signed up,
I would like to receive a mail notification when I sign up.
```
```
As a user,
So I can be aware of the comments on my recipe,
I would like to receive an email when other users leave comments on my recipe.
```
```
As a user,
So I can know how many people have given feedback to my recipe,
I would like to know how many votes and comments my recipe has received.
```
```
As a user,
So that I don’t have to go shopping,
I would like to filter my search for recipes that don’t require more ingredients.
```


Technology Used
---------------
Ruby on Rails Back End
AngularJS Front End

Protractor
Karma
Rspec

Installation Instructions
-------------------------
```
git clone https://github.com/hedudelgado/Recipes-project
$cd RecipesAPI
$bundle install
$rake db:create
$rake db:migrate
$npm install bower -g
$rake bower:install
$rake routes
```

Run the servers
---------------

```
Back End (within backend directory) ->rails s
Go to http://localhost:3000 (or any other path the Api uses) in your browser, to make sure the server is running.
```
```
Front end (within front end directory)-> npm start
Go to http://localhost:8000 (or any other path the Angular uses) in your browser, to make sure the server is running.
```



Testing Instructions
--------------------

RSpec (unit and feature tests, within back end directory)

```
$rails g rspec:install
$rspec
```

JavaScript/Angular - Testing
-----------------------------

Make sure the rails server is running for testing angular as they interact within the end to end tests(e2e).
```
$rails s
```

Make sure you are in Frontend directory for Angular - e2e tests, in a separate command line run:
```
$npm install
$npm run Protractor
```

To test drive the app, make sure you have the Rails and Angular severs running in different command line taps, then in your brower visit: For Rails http://localhost:3000 For Angularjs http://localhost:8000


Project Diagram
---------------

[![solarized dualmode](https://github.com/hedudelgado/Recipes-project/blob/master/diagram.png)](#features)