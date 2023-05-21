//NOTE: Your DOM manipulation will occur in this file
import {recipeData} from './data/recipes'
import {ingredientsData} from './data/ingredients'

import {
  allRecipesPage, 
  recipePage, 
  allRecipesBox, 
  recipePageImage, 
  recipeIngredientListSection,
  recipePageNameSection, 
  recipeTagsSection, 
  recipeInstructionsSection, 
  recipeCostSection,
  searchInput,
  recipeTags,

} from './scripts.js'

const { 
  filterByTag,
  filterByName,
  getInstructions,
  getIngredientInfo,
  calcRecipeCost
} = require('../src/RecipeRepository.js');

//DOM Functions

const hideDomElement = (element) => {
  element.classList.add('hidden')
};

const showDomElement = (element) => {
  element.classList.remove('hidden')
};

const showRecipesPage = () => {
  showDomElement(allRecipesPage)
  hideDomElement(recipePage)
};

const showRecipePage = () => {
  hideDomElement(allRecipesPage)
  showDomElement(recipePage)
};

const displayRecipes = (data) => {
  allRecipesBox.innerHTML = "";
  data.forEach((recipe) => {
  allRecipesBox.innerHTML += `<article class="recipe all-recipe-box" id="${recipe.id}">
  <img class="recipe all-recipe-image" src="${recipe.image}">
  <h3 class="recipe">${recipe.name}</h3>
  </article>`})
};

const searchRecipeByName = (recipeData, searchInput) => {
  const filteredNames = filterByName(recipeData, searchInput.value);
  if (typeof filteredNames === 'string') {
    allRecipesBox.innerHTML = "";
    allRecipesBox.innerHTML = `<p>${filteredNames}</p>`
  } else {
    displayRecipes(filteredNames);
  }
  searchInput.value = '';
}

const selectRecipe = (e) => {
  const recipe = recipeData.find(recipe => recipe.id === parseInt(e.target.closest('article').id))
  return recipe
};

const displayRecipe = (ingredientsData, event) => {
  const recipe = selectRecipe(event)
  recipePageImage.src = recipe.image;
  recipePageNameSection.innerText = recipe.name;
  const recipeCost = calcRecipeCost(ingredientsData, recipe);
  recipeCostSection.innerText = `Total Cost: $${recipeCost}`
  recipeTagsSection.innerHTML = ''
  recipe.tags.forEach(tag => {
    recipeTagsSection.innerHTML += `<li>#${tag}</li>`
  })

  const ingredientNames = getIngredientInfo(ingredientsData, recipe, 'name');
  const ingredientQuantities = recipe.ingredients.map(ingredient => ingredient.quantity.amount);
  const ingredientUnits = recipe.ingredients.map(ingredient => ingredient.quantity.unit)

  recipeIngredientListSection.innerHTML += '';
  recipe.ingredients.forEach((ingredient, i) => {
    recipeIngredientListSection.innerHTML += `<li>${ingredientNames[i]} | ${ingredientQuantities[i]} ${ingredientUnits[i]}`
  })  

  const recipeInstructions = getInstructions(recipe)
  const numSteps = Object.keys(recipeInstructions)
  numSteps.forEach(step => {
   recipeInstructionsSection.innerHTML += `<li>${recipeInstructions[step]}`
  })
};

const showRecipeByTag = () => {
  allRecipesBox.innerHTML = ''
    const recipes = filterByTag(recipeData, recipeTags.value)
      recipes.forEach((recipe) => {
  allRecipesBox.innerHTML += `<article class="recipe all-recipe-box" id="${recipe.id}">
  <img class="recipe all-recipe-image" src="${recipe.image}">
  <h3 class="recipe">${recipe.name}</h3>
  </article>`
 })

}

export {  
  showRecipesPage, 
  showDomElement, 
  hideDomElement, 
  displayRecipes, 
  showRecipePage, 
  displayRecipe, 
  searchRecipeByName, 
  showRecipeByTag
}