// Your fetch requests will live here!
let recipesData, ingredients, users

import {showRecipesPage, displayRecipes} from './domUpdates.js'
// import {displayRecipes, showRecipePage} from './domUpdates.js'

// const usersResponse = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users').then((response) => response.json());
const recipeResponse = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes').then(response => response.json());
// const ingredientsResponse = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients').then((response) => response.json());

// console.log(recipeResponse)

window.addEventListener('load', () => {
Promise.all([recipeResponse]).then(([recipes]) => {

//logic here
//anything needed on page load
//global variable declarations
//load user and recipes
// console.log(recipes)

recipesData = recipes.recipes

// console.log(recipeData)

showRecipesPage()
displayRecipes(recipes.recipes)

})})

// setTimeout((() => {console.log(recipesData)}), 1000)

console.log('I will be a fetch request!')

export {
    recipesData,
}