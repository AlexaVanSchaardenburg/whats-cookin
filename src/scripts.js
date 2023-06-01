import './styles.css'
import {recipeData, ingredientsData, user} from './apiCalls'

import './images/turing-logo.png'
import './images/whats-cookin-header.png'

//Import Functions

import { 
  displayRecipes, 
  showRecipePage,
  showRecipesPage, 
  displayRecipe, 
  searchRecipeByName,
  showRecipeByTag,
  saveSelectedRecipe,
  deleteSelectedRecipe
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
const deleteRecipeButton = document.querySelector('.delete-recipe')

let currentView = 'all'

//Event Listeners

saveRecipeButton.addEventListener('click', (event) => {
  saveSelectedRecipe(event, user, recipeData)
})

viewSavedRecipesButton.addEventListener('click', () => {
  currentView = 'saved'
  showRecipesPage()
  displayRecipes(user.recipesToCook);
})

goToRecipesButton.addEventListener('click', () => {
  currentView = 'all'
  showRecipesPage()
  displayRecipes(recipeData)
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

deleteRecipeButton.addEventListener('click', (event) => {
  deleteSelectedRecipe(event, user, recipeData);
})

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
  deleteRecipeButton,
  currentView
}
