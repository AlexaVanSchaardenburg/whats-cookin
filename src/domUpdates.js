//NOTE: Your DOM manipulation will occur in this file

import {filterByName} from './RecipeRepository.js'
import{homePage, allRecipesPage, recipePage, allRecipesBox, recipePageImage, recipeIngredientListSection,recipePageNameSection, recipeTagsSection, recipeInstructionsSection, recipeCostSection} from './scripts.js'
import {recipeData} from './data/recipes.js'
import {ingredientsData} from './data/ingredients.js'
const { filterByTag,
  filterByName,
  getInstructions,
  listIngredient,
  calcRecipeCost} = require('../src/RecipeRepository.js');

// const {filterByName} = require('../data/RecipeRepository.js')


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
  allRecipesBox.innerHTML += `<article class="recipe all-recipe-box" id="${recipe.id}">
  <img class="recipe all-recipe-image" src="${recipe.image}">
  <h3 class="recipe">${recipe.name}</h3>
  </article>`})
};

const searchRecipeByName = (recipeData, searchInput) => {
  const filteredNames = filterByName(recipeData, searchInput.value);
  allRecipesBox.innerHTML = "";
  if (typeof filteredNames === 'string') {
    allRecipesBox.innerHTML = `<p>${filteredNames}</p>`
  } else {
    filteredNames.forEach((recipe) => {
      allRecipesBox.innerHTML += `<article class="all-recipe-box" id="${recipe.id}">
      <img class="all-recipe-image" src="${recipe.image}">
      <h3>${recipe.name}</h3>
      </article>`});
  }
  hideDomElement(homePage)
  hideDomElement(homePage)
  showDomElement(allRecipesPage)
}



const showRecipePage = () => {
  hideDomElement(homePage)
  hideDomElement(allRecipesPage)
  showDomElement(recipePage)
};

const selectRecipe = (e) => {
    const recipe = recipeData.find(recipe => recipe.id === parseInt(e.target.closest('article').id))
    return recipe
};

const displayRecipe = (event) => {
  const recipe = selectRecipe(event)
  // //display the selected recipes name, ingredients, instructions, and total cost on the individual recipe page using helper functions from RecipeRepository.js file

  recipePageImage.src = recipe.image;
  recipePageNameSection.innerText = recipe.name;
  recipeCostSection.innerText = `Total Cost: ${`cost here`}`

  recipe.ingredients.forEach(ingredient => {
    console.log(listIngredient(recipeData, ingredient))
    recipeIngredientListSection.innerHTML += `<li>${listIngredient(recipeData, ingredient)} | ${ingredient.quantity.amount} ${ingredient.quantity.unit}<li>`
  })

  recipe.tags.forEach(tag => {
    recipeTagsSection.innerHTML += `<li>#${tag}</li>`
  })

  const recipeInstructions = getInstructions(recipe)
  const numSteps = Object.keys(recipeInstructions)
  numSteps.forEach(step => {
    recipeInstructionsSection.innerHTML += `<ol><li>${recipeInstructions[step]}<li><ol>`
  })

  showRecipePage()
};

export {showRecipesPage, showDomElement, hideDomElement, displayAllRecipes, showRecipePage, displayRecipe, searchRecipeByName}
