//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import {recipeData} from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

import './images/turing-logo.png'
import './images/whats-cookin-header.png'
import './images/healthy-cook.png'
// import {recipeData} from './data/recipes'
import {ingredientsData} from './data/ingredients'
import { usersData } from './data/users'
import { selectRandomUser, saveRecipe} from './RecipeRepository'

//Import Functions

import { 
  showDomElement, 
  hideDomElement, 
  displayRecipes, 
  showRecipePage,
  showRecipesPage, 
  displayRecipe, 
  searchRecipeByName,
  showRecipeByTag,
  saveSelectedRecipe,
  showSavedRecipesPage,
  deleteSelectedRecipe
} from './domUpdates.js'

const goToRecipesButton = document.querySelector('.go-to-recipes')
const recipePage = document.querySelector('.recipe-page')
const allRecipesPage = document.querySelector('.all-recipes-page')
const allRecipesBox = document.querySelector('.all-recipe-flex')
const recipeTags = document.querySelector('.recipe-tags')
const saveRecipeButton = document.querySelector('.save-recipe')
const viewSavedRecipesButton = document.querySelector('.view-saved-recipes')
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('.search-submit')
const recipePageImage = document.querySelector('.aside-img');
const recipeIngredientListSection = document.querySelector('.ingredients-list');
const recipePageNameSection = document.querySelector('#recipe-name');
const recipeTagsSection = document.querySelector('.flex-tags');
const recipeInstructionsSection = document.querySelector('.instructions-list'); 
const recipeCostSection = document.querySelector('.total-cost');
const deleteRecipeButton = document.querySelector('.delete-recipe')

let user; 
let currentView = 'all'

//Event Listeners

window.addEventListener('load', () => {
  showRecipesPage();
  displayRecipes(recipeData)
  user = selectRandomUser(usersData)
  console.log(user)
  return user
})

saveRecipeButton.addEventListener('click', (event) => {
  saveSelectedRecipe(event, user, recipeData)
})

viewSavedRecipesButton.addEventListener('click', () => {
  currentView = 'saved'
  showRecipesPage()
  displayRecipes(user.recipesToCook);
  console.log(currentView);
})

goToRecipesButton.addEventListener('click', () => {
  currentView = 'all'
  showRecipesPage()
  displayRecipes(recipeData)
  console.log(currentView);
})

recipeTags.addEventListener('change', () => {
  showRecipeByTag()
})

recipeTags.addEventListener('change', () => {
  showRecipeByTag(currentView)
})

searchButton.addEventListener('click', () => {
  if (searchInput.value) {
    showRecipesPage()
    searchRecipeByName(currentView, searchInput)}
  }
);

allRecipesBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('recipe')) {
    showRecipePage();
    displayRecipe(ingredientsData, event);
  };
});

deleteRecipeButton.addEventListener('click', () => {
  deleteSelectedRecipe(event, user, recipeData);
})

export {
  goToRecipesButton, 
  allRecipesPage, 
  recipePage, 
  allRecipesBox, 
  searchInput, 
  recipePageImage,
  recipePageNameSection, 
  recipeTagsSection, 
  recipeIngredientListSection, 
  recipeCostSection, 
  recipeInstructionsSection,
  recipeTags,
  saveRecipeButton,
  user,
  viewSavedRecipesButton,
  deleteRecipeButton,
  currentView
}
