//NOTE: Your DOM manipulation will occur in this file
import{homePage, allRecipesPage, recipePage, allRecipesBox, recipePageImage, recipeIngredientListSection,recipePageNameSection, recipeTagsSection, recipeInstructionsSection, recipeCostSection} from './scripts.js'
import {recipeData} from './data/recipes.js'
import {ingredientsData} from './data/ingredients.js'
const { filterByTag,
  filterByName,
  getInstructions,
  listIngredient,
  calcRecipeCost} = require('../src/RecipeRepository.js');

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
  allRecipesBox.innerHTML += `<article class="all-recipe-box click-to-view-recipe" id="${recipe.id}">
  <img class="all-recipe-image click-to-view-recipe" src="${recipe.image}">
  <h3 class="click-to-view-recipe">${recipe.name}</h3>
  </article>`})
};

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

export {showRecipesPage, showDomElement, hideDomElement, displayAllRecipes, displayRecipe}