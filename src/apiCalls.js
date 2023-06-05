let recipeData, ingredientsData, usersData, user

import {showRecipesPage, displayAllRecipes} from './domUpdates.js'
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
displayAllRecipes(recipeData);
return user;
})});

fetch(`https://api.frankfurter.app/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    entries.forEach((entry) => {
      if (entry[0] !== 'USD') {
        currency[0].innerHTML += `<option value="${entry[0]}">${entry[0]}</option>`;
        }
    })
  })
  .catch(error => alert(`${error.message}`));

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
  .then((response) => {
    if(!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      return response.json();
    }
  })
  .then(getUpdatedUsers(userData.id))
  .catch(error => alert(`${error.message}`));
};

const getUpdatedUsers = (id) => {
  fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json())
  .then(users => {
    usersData = users.users
    user = usersData.find(user => user.id === id)
    return user
  })
  .catch(error => alert(`${error.message}`))
}

export {
    recipeData,
    usersData,
    ingredientsData,
    user,
    saveRecipe,
    getUpdatedUsers
}