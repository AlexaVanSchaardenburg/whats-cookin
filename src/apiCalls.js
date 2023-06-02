let recipeData, ingredientsData, usersData, user

import {showRecipesPage, displayRecipes} from './domUpdates.js'
import { selectRandomUser } from '../src/RecipeRepository.js';
import { currency } from './scripts.js'


const usersResponse = fetch('http://localhost:3001/api/v1/users').then((response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}).catch(error => alert(`${error.message}`));

const recipeResponse = fetch('http://localhost:3001/api/v1/recipes').then(response => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}).catch(error => alert(`${error.message}`));

const ingredientsResponse = fetch('http://localhost:3001/api/v1/ingredients').then((response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}).catch(error => alert(`${error.message}`));

window.addEventListener('load', () => {
Promise.all([usersResponse, recipeResponse, ingredientsResponse]).then(([users, recipes, ingredients]) => {

recipeData = recipes.recipes
usersData = users.users
ingredientsData = ingredients.ingredients

showRecipesPage();
user = selectRandomUser(usersData);
displayRecipes(recipeData);
return user;
})});

fetch(`https://api.frankfurter.app/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    entries.forEach((entry) => {
      currency[0].innerHTML += `<option value="${entry[0]}">${entry[0]}</option>`;
    })
  })
  .catch(error => alert(`${error.message}`));

export {
    recipeData,
    usersData,
    ingredientsData,
    user,
}