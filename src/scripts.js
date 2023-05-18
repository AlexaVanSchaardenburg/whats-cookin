//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/whats-cookin-header.png'
import './images/healthy-cook.png'
import ingredientsData from './data/ingredients.js'

//Import Functions

import {showRecipesPage} from './domUpdates.js'

//Query Selectors

const goToRecipesButton = document.querySelector('.go-to-recipes')
const homePage = document.querySelector('.home-page')
const allRecipesPage = document.querySelector('.all-recipes-page')
const recipePage = document.querySelector('.recipe-page')
const allRecipesBox = document.querySelector('.all-recipe-flex')
const recipeTags = document.querySelector('.recipe-tags')

//Event Listeners

goToRecipesButton.addEventListener('click', () => {showRecipesPage()})
recipeTags.addEventListener('change', () => {console.log(recipeTags.value)})
// allRecipesBox.addEventListener('click', ())

export{goToRecipesButton, homePage, allRecipesPage, recipePage, allRecipesBox}