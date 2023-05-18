//NOTE: Your DOM manipulation will occur in this file
import{homePage, allRecipesPage, recipePage, allRecipesBox, recipeTags} from './scripts.js'
import {recipeData} from './data/recipes.js'
import { filterByTag } from './RecipeRepository.js';

//DOM Functions

const hideDomElement = (element) => {
  element.classList.add('hidden')
};

const showDomElement = (element) => {
  element.classList.remove('hidden')
};

const showRecipesPage = () => {
  displayAllRecipes(recipeData)
  hideDomElement(homePage)
  hideDomElement(homePage)
  showDomElement(allRecipesPage)
};

const displayAllRecipes = (data) => {
  data.forEach((recipe) => {
  allRecipesBox.innerHTML += `<article class="all-recipe-box" id="${recipe.id}">
  <img class="all-recipe-image" src="${recipe.image}">
  <h3>${recipe.name}</h3>
  </article>`})
};

const showRecipePage = () => {
  hideDomElement(homePage)
  hideDomElement(allRecipesPage)
  showDomElement(recipePage)
};

const selectRecipe = (e) => {
    //iterate through the recipes data and find the recipe with the matching id to the elements id that was clicked. - FUNCTION
    return selectedRecipe = recipeData.find(recipe => recipe.id === e.id)
};

const displayRecipe = (event) => {
  //needs to take in an event target as the parameter -- event listener listens for click on page and returns the element that was clicked (child element) -- put event listener on allRecipesBox - IN SCRIPT.JS FILE
  const recipe = selectRecipe(event)
  //display the selected recipes name, ingredients, instructions, and total cost on the individual recipe page using helper functions from RecipeRepository.js file
  showRecipePage()
};

const showRecipeByTag = () => {
  allRecipesBox.innerHTML = ''
    const recipes = filterByTag(recipeData, recipeTags.value)
      recipes.forEach((recipe) => {
  allRecipesBox.innerHTML += `<article class="all-recipe-box" id="${recipe.id}">
  <img class="all-recipe-image" src="${recipe.image}">
  <h3>${recipe.name}</h3>
  </article>`
 })

}

export {showRecipesPage, showDomElement, hideDomElement, displayAllRecipes, displayRecipe, showRecipeByTag}