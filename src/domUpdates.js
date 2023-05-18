//NOTE: Your DOM manipulation will occur in this file
import{homePage, allRecipesPage, recipePage, allRecipesBox, recipePageImage, recipeIngredientListSection,recipePageNameSection, recipeTagsSection, recipeInstructionsSection, recipeCostSection} from './scripts.js'
import {recipeData} from './data/recipes.js'
import {ingredientsData} from './data/ingredients.js'
const { filterByTag,
  filterByName,
  getInstructions,
  listIngredients,
  calcRecipeCost} = require('../src/data/RecipeRepository.js');

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
  allRecipesBox.innerHTML += `<article class="all-recipe-box" id="${recipe.id}">
  <img class="all-recipe-image" src="${recipe.image}">
  <h3>${recipe.name}</h3>
  </article>`})
};

const showRecipePage = () => {
  hideDomElement(homePage)
  hideDomElement(allRecipesPage)
  showDomElement(recipePage)
};

const selectRecipe = (e) => {
    return recipeData.find(recipe => recipe.id === e.target.id)
};

const displayRecipe = (event) => {
  const recipe = selectRecipe(event)
  //display the selected recipes name, ingredients, instructions, and total cost on the individual recipe page using helper functions from RecipeRepository.js file
  const ingredientsNames = listIngredients(recipeData, ingredientsData, recipe);
  const name = recipe.name;
  const recipeTags = recipe.tags; 
  const recipeCost;

  recipePageImage.src = recipe.image;
  recipe.ingredients.forEach(ingredient => {
    recipeIngredientsListSection.innerHTML += `
    <li>${}|${ingredient.amount}<li>
    `
  })
  recipePageNameSection =
  recipeTagsSection =
  recipeInstructionsSection =

  showRecipePage()
};

export {showRecipesPage, showDomElement, hideDomElement, displayAllRecipes, displayRecipe}