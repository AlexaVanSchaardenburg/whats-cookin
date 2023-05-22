// Your fetch requests will live here!
let recipeData, ingredientsData, usersData, user

import {showRecipesPage, displayRecipes} from './domUpdates.js'
const { selectRandomUser } = require('../src/RecipeRepository.js');

const usersResponse = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users').then((response) => response.json());
const recipeResponse = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes').then(response => response.json());
const ingredientsResponse = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients').then((response) => response.json());

window.addEventListener('load', () => {
Promise.all([usersResponse, recipeResponse, ingredientsResponse]).then(([users, recipes, ingredients]) => {

recipeData = recipes.recipes
usersData = users.users
ingredientsData = ingredients.ingredients

showRecipesPage();
user = selectRandomUser(usersData)
displayRecipes(recipeData)
console.log(user)
return user
})})

export {
    recipeData,
    usersData,
    ingredientsData,
    user
}