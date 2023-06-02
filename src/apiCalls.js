let recipeData, ingredientsData, usersData, user

import {showRecipesPage, displayAllRecipes} from './domUpdates.js'
import { selectRandomUser } from '../src/RecipeRepository.js';

const usersResponse = fetch('http://localhost:3001/api/v1/users').then((response) => response.json());
const recipeResponse = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes').then(response => response.json());
const ingredientsResponse = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients').then((response) => response.json());

window.addEventListener('load', () => {
Promise.all([usersResponse, recipeResponse, ingredientsResponse]).then(([users, recipes, ingredients]) => {

recipeData = recipes.recipes
usersData = users.users
ingredientsData = ingredients.ingredients

showRecipesPage();
user = selectRandomUser(usersData)
displayAllRecipes(recipeData)
return user
})})

const saveRecipe = (userData, recipeData) => {
  fetch('http://localhost:3001/api/v1/usersRecipes', {
    method: 'POST',
    body: JSON.stringify({
      userID: userData.id,
      recipeID: recipeData.id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(getUpdatedUsers(userData.id))
  .catch(err => alert(err));
};

const getUpdatedUsers = (id) => {
  fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json())
  .then(users => {
    usersData = users.users
    user = usersData.find(user => user.id === id)
    return user
  })
  .catch(err => alert(err))
}

export {
    recipeData,
    usersData,
    ingredientsData,
    user,
    saveRecipe,
    getUpdatedUsers
}