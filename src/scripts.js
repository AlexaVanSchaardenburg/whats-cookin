//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

import './images/turing-logo.png'
import './images/whats-cookin-header.png'
import './images/healthy-cook.png'
import {recipeData} from './data/recipes'
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
const savedRecipesButton = document.querySelector('.saved-recipe')
const saveRecipesButton = document.querySelector('.save-recipe')
const savedRecipeSectionButton = document.querySelector('.saved-recipe')
const savedRecipesPage = document.querySelector('.saved-recipes-page')
const savedRecipesBox = document.querySelector('.saved-recipe-flex')

let user; 

//Event Listeners

window.addEventListener('load', () => {
  user = selectRandomUser(usersData)
  console.log(user)
  return user
})

saveRecipesButton.addEventListener('click', (event) => {saveSelectedRecipe(event, user, recipeData)})
savedRecipesBox.addEventListener('dblclick', (event) => {deleteSelectedRecipe(event, user, recipeData)})
savedRecipeSectionButton.addEventListener('click', () => {showSavedRecipesPage()})
goToRecipesButton.addEventListener('click', () => {
  displayRecipes(recipeData)
  showRecipesPage()})
goToRecipesButton.addEventListener('click', () => {showRecipesPage()})
recipeTags.addEventListener('change', () => {showRecipeByTag()})


const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton')
const recipePageImage = document.querySelector('.aside-img');
const recipeIngredientListSection = document.querySelector('.ingredients-list');
const recipePageNameSection = document.querySelector('#recipe-name');
const recipeTagsSection = document.querySelector('.flex-tags');
const recipeInstructionsSection = document.querySelector('.instructions-list'); 
const recipeCostSection = document.querySelector('.total-cost');

//Event Listeners

window.addEventListener('load', () => {
  showRecipesPage()
  displayRecipes(recipeData)
})

// recipeTags.addEventListener('change', () => {console.log(recipeTags.value)})
recipeTags.addEventListener('change', () => {showRecipeByTag()})
// allRecipesBox.addEventListener('click', ())

goToRecipesButton.addEventListener('click', () => {showRecipesPage()});

searchButton.addEventListener('click', () => {
  if (searchInput.value) {
    showRecipesPage()
    searchRecipeByName(recipeData, searchInput)}
  }
);

allRecipesBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('recipe')) {
    showRecipePage();
    displayRecipe(ingredientsData, event);
  };
});

savedRecipesBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('recipe')) {
    showRecipePage();
    displayRecipe(ingredientsData, event);
  };
});

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
  saveRecipesButton,
  savedRecipesPage,
  savedRecipesBox,
  user 
}
