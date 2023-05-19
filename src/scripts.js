//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/whats-cookin-header.png'
import './images/healthy-cook.png'
import {recipeData} from './data/recipes'
import {ingredientsData} from './data/ingredients'

//Import Functions

import {
  showRecipesPage, 
  showHomePage,
  showDomElement, 
  hideDomElement, 
  displayRecipes, 
  showRecipePage, 
  displayRecipe, 
  searchRecipeByName,
  showRecipeByTag
} from './domUpdates.js'

//Query Selectors

const goToRecipesButton = document.querySelector('.go-to-recipes')
const homePage = document.querySelector('.home-page')
const recipePage = document.querySelector('.recipe-page')
const allRecipesPage = document.querySelector('.all-recipes-page')
const allRecipesBox = document.querySelector('.all-recipe-flex')
const recipeTags = document.querySelector('.recipe-tags')
const homeButton = document.querySelector('.home-button')

//Event Listeners

goToRecipesButton.addEventListener('click', () => {showRecipesPage()})
// recipeTags.addEventListener('change', () => {console.log(recipeTags.value)})
recipeTags.addEventListener('change', () => {showRecipeByTag()})
// allRecipesBox.addEventListener('click', ())
homeButton.addEventListener('click', () => {showHomePage()})

const searchInput = document.querySelector('#searchInput');
const searchInput2 = document.querySelector('#searchInput2');
const searchButton = document.querySelector('#searchButton');
const searchButton2 = document.querySelector('#searchButton2')
// const homeForm = document.querySelector('.home-form');

const recipePageImage = document.querySelector('.aside-img');
const recipeIngredientListSection = document.querySelector('.ingredients-list');
const recipePageNameSection = document.querySelector('#recipe-name');
const recipeTagsSection = document.querySelector('.flex-tags');
const recipeInstructionsSection = document.querySelector('.instructions-list'); 
const recipeCostSection = document.querySelector('.total-cost'); 

//Event Listeners

goToRecipesButton.addEventListener('click', () => {showRecipesPage()});

searchButton.addEventListener('click', () => {
  if (searchInput.value) {
    searchRecipeByName(recipeData, searchInput)}
  }
);

searchButton2.addEventListener('click', () => {
  if (searchInput.value) {
    searchRecipeByName(recipeData, searchInput2)}
  }
);

allRecipesBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('recipe')) {
    showRecipePage();
    displayRecipe(ingredientsData, event);
  };
});

export {
  goToRecipesButton, 
  homePage, 
  homeButton,
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
}
