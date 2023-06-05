# What's Cookin'?

## Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
We are building an interactive web application that allows users to peruse a selection of recipes, view the ingredients, cooking instructions, and total cost of ingredients for a particular recipe. From the recipe page, users can save their favorite recipes to a collection and remove them from the collection at the click of a button. Users can also search the full recipe list or their saved recipes by keywords included in the recipe name, or they can filter by tag. When viewing a recipe a user can also convert the total cost of the ingredients from USD to a 29 different currencies. 

## Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork this repository
2. Clone it down to your machine
3. `cd` into the directory
4. Run `npm install` in the terminal
5. Run `npm start` in the terminal to launch the application in your default browser
  - When done vieweing, use `Control + C` to stop running the local server.

## Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![alt](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzczNjBiYjQ0MGViMGQ1Mzk3OTQzM2UxZTViNTI2NjhkZDUzMWQ5MiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/ySQPo5WMdRpIQo1w6F/giphy.gif)

## Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
- [Alexa VanSchaardenburg](https://github.com/AlexaVanSchaardenburg)
- [Mike Gudenau](https://github.com/mikegudenau)
- [Race Osuna](https://github.com/RaceOsuna)
- [Rachel Soae Prather](https://github.com/rachelsoae)

## Tech:
- JavaScript
- HTML
- CSS
- Webpack compiler
- Mocha/Chai
- VS Code
- Chrome DevTools
- Fetch

## Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
This project was centered around the use of TDD (Test Driven Development/Design) to create a series of data model functions dynamic enough to accept data from API sources. This was our first experience using fetch to pull real-world data into an application, and it was exciting to learn the effects of placement and timing on the success of fetch calls. Working with Webpack also sharpened our understanding of ES6 and importing/exporting among multiple files.

Potential plans for future development:
- Landing page that generates featured/recommended recipes
- Ability to filter by multiple tags
- Ability to search by ingredient
- Conversion of search functionality to a form

Mocha and chai are already set up, with a boilerplate test for you.
