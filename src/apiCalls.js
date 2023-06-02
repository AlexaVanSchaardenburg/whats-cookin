let recipeData, ingredientsData, usersData, user

import {showRecipesPage, displayRecipes} from './domUpdates.js'
import { selectRandomUser } from '../src/RecipeRepository.js';
import { currency } from './scripts.js'


const usersResponse = fetch('http://localhost:3001/api/v1/users').then((response) => response.json());
const recipeResponse = fetch('http://localhost:3001/api/v1/recipes').then(response => response.json());
const ingredientsResponse = fetch('http://localhost:3001/api/v1/ingredients').then((response) => response.json())

window.addEventListener('load', () => {
Promise.all([usersResponse, recipeResponse, ingredientsResponse]).then(([users, recipes, ingredients]) => {

recipeData = recipes.recipes
usersData = users.users
ingredientsData = ingredients.ingredients

showRecipesPage();
user = selectRandomUser(usersData)
displayRecipes(recipeData)
return user
})})

const fetchCurrencies = () => fetch(`https://api.frankfurter.app/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    entries.forEach((entry) => {
      currency[0].innerHTML += `<option value="${entry[0]}">${entry[0]}</option>`
    })
  });

export {
    recipeData,
    usersData,
    ingredientsData,
    user,
    fetchCurrencies
}