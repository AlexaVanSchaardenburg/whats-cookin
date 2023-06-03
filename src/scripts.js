import './styles.css'
import {recipeData, ingredientsData, user} from './apiCalls'

import './images/turing-logo.png'
import './images/whats-cookin-header.png'

//Import Functions

import { 
  displayAllRecipes, 
  showRecipePage,
  showRecipesPage, 
  displayRecipe, 
  searchRecipeByName,
  showRecipeByTag,
  saveSelectedRecipe,
  displaySavedRecipes,
  convertCurrency,
  showLoadingButton
} from './domUpdates.js'

const currency = document.querySelectorAll('.currency')
const outputCurrency = document.getElementById('output-currency')
const convertButton = document.querySelector('.convert')
const goToRecipesButton = document.querySelector('.go-to-recipes')
const recipePage = document.querySelector('.recipe-page')
const allRecipesPage = document.querySelector('.all-recipes-page')
const allRecipesBox = document.querySelector('.all-recipe-flex')
const recipeTags = document.querySelector('.recipe-tags')
const saveRecipeButton = document.querySelector('.save-recipe')
const viewSavedRecipesButton = document.querySelector('.view-saved-recipes')
const searchInput = document.querySelector('#search-box');
const form = document.querySelector('form');
const recipePageImage = document.querySelector('.aside-img');
const recipeIngredientListSection = document.querySelector('.ingredients-list');
const recipePageNameSection = document.querySelector('#recipe-name');
const recipeTagsSection = document.querySelector('.flex-tags');
const recipeInstructionsSection = document.querySelector('.instructions-list'); 
const recipeCostSection = document.querySelector('.total-cost');
const loadingButton = document.querySelector('.loading');

let currentView = 'all'

//Event Listeners

convertButton.addEventListener('click', convertCurrency)

saveRecipeButton.addEventListener('click', (event) => {
  saveSelectedRecipe(event, user, recipeData)
})

viewSavedRecipesButton.addEventListener('click', () => {
  currentView = 'saved'
  showLoadingButton();
  setTimeout(showRecipesPage, 3000)
  setTimeout(displaySavedRecipes, 3000, user);
  setTimeout(console.log, 3000, user)
})

goToRecipesButton.addEventListener('click', () => {
  currentView = 'all'
  showRecipesPage()
  displayAllRecipes(recipeData)
})

recipeTags.addEventListener('change', () => {
  showRecipeByTag()
})

recipeTags.addEventListener('change', () => {
  showRecipeByTag(currentView)
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  searchRecipeByName(currentView, searchInput)
})

allRecipesBox.addEventListener('click', (event) => {
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
  recipePageImage,
  recipePageNameSection, 
  recipeTagsSection, 
  recipeIngredientListSection, 
  recipeCostSection, 
  recipeInstructionsSection,
  recipeTags,
  saveRecipeButton,
  viewSavedRecipesButton,
  currentView,
  currency,
  outputCurrency,
  loadingButton
}
