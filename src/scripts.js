//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/whats-cookin-header.png'
import './images/healthy-cook.png'
import ingredientsData from './data/ingredients.js'
import {recipeData} from './data/recipes'
// import filterByName from './data/RecipeRepository.js'

//Import Functions

import {showRecipesPage, displayAllRecipes, searchRecipeByName} from './domUpdates.js'

//Query Selectors

const goToRecipesButton = document.querySelector('.go-to-recipes')
const homePage = document.querySelector('.home-page')
const allRecipesPage = document.querySelector('.all-recipes-page')
const recipePage = document.querySelector('.recipe-page')
const allRecipesBox = document.querySelector('.all-recipe-flex')
const searchInput = document.querySelector('#searchInput');
const searchInput2 = document.querySelector('#searchInput2');
const searchButton = document.querySelector('#searchButton');
const searchButton2 = document.querySelector('#searchButton2')
// const homeForm = document.querySelector('.home-form');


//Event Listeners

goToRecipesButton.addEventListener('click', () => {showRecipesPage(homePage, allRecipesPage)})
searchButton.addEventListener('click', () => {
  if (searchInput.value) {
    searchRecipeByName(recipeData, searchInput)}
  }
)
searchButton2.addEventListener('click', () => {
  if (searchInput.value) {
    searchRecipeByName(recipeData, searchInput2)}
  }
)
goToRecipesButton.addEventListener('click', () => {showRecipesPage()})
// allRecipesBox.addEventListener('click', ())

export {goToRecipesButton, homePage, allRecipesPage, recipePage, allRecipesBox, searchInput}