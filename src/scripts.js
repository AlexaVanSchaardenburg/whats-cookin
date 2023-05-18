//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/whats-cookin-header.png'
import './images/healthy-cook.png'
import ingredientsData from './data/ingredients.js'
import {recipeData} from './data/recipes.js'

//Import Functions

import {showRecipesPage, displayAllRecipes, filterByName} from './domUpdates.js'

//Query Selectors

const goToRecipesButton = document.querySelector('.go-to-recipes')
const homePage = document.querySelector('.home-page')
const allRecipesPage = document.querySelector('.all-recipes-page')
const allRecipesBox = document.querySelector('.all-recipe-flex')
const searchInput = document.querySelector('#searchInput').value;
const searchButton = document.querySelector('#searchButton');

//Event Listeners

goToRecipesButton.addEventListener('click', () => {showRecipesPage(homePage, allRecipesPage)})
searchButton.addEventListener('click', () => {searchRecpieByName(recipeData, searchInput)})

//Functions
console.log(recipeData)
displayAllRecipes(recipeData, allRecipesBox)