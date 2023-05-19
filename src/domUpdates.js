//NOTE: Your DOM manipulation will occur in this file
import {recipeData} from './data/recipes'
import {ingredientsData} from './data/ingredients'

import {
  homePage, 
  homeButton,
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
  searchInput2,
  recipeTags,

} from './scripts.js'

const { 
  filterByTag,
  filterByName,
  getInstructions,
  getIngredientInfo,
  calcRecipeCost,
  saveRecipe,
  deleteRecipe
} = require('../src/RecipeRepository.js');

//DOM Functions

const hideDomElement = (element) => {
  element.classList.add('hidden')
};

const showDomElement = (element) => {
  element.classList.remove('hidden')
};

const showHomePage = () => {
  showDomElement(homePage)
  hideDomElement(allRecipesPage);
  hideDomElement(recipePage)
}

const showRecipesPage = () => {
  homeButton.classList.remove('invisible')
  displayRecipes(recipeData)
  hideDomElement(homePage)
  showDomElement(allRecipesPage)
};

const displayRecipes = (data) => {
  data.forEach((recipe) => {
  allRecipesBox.innerHTML += `<article class="recipe all-recipe-box" id="${recipe.id}">
  <img class="recipe all-recipe-image" src="${recipe.image}">
  <h3 class="recipe">${recipe.name}</h3>
  </article>`})
};

const searchRecipeByName = (recipeData, searchInput) => {
  showRecipesPage();
  const filteredNames = filterByName(recipeData, searchInput.value);
  allRecipesBox.innerHTML = "";
  if (typeof filteredNames === 'string') {
    allRecipesBox.innerHTML = `<p>${filteredNames}</p>`
  } else {
    displayRecipes(filteredNames);
  }
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

const displayRecipe = (ingredientsData, event) => {
  const recipe = selectRecipe(event)
  // //display the selected recipes name, ingredients, instructions, and total cost on the individual recipe page using helper functions from RecipeRepository.js file
  recipePageImage.src = recipe.image;
  recipePageNameSection.innerText = recipe.name;
  const recipeCost = calcRecipeCost(ingredientsData, recipe);
  recipeCostSection.innerText = `Total Cost: $${recipeCost}`

  recipe.tags.forEach(tag => {
    recipeTagsSection.innerHTML += `<li>#${tag}</li>`
  })

  const ingredientNames = getIngredientInfo(ingredientsData, recipe, 'name');
  const ingredientQuantities = recipe.ingredients.map(ingredient => ingredient.quantity.amount);
  const ingredientUnits = recipe.ingredients.map(ingredient => ingredient.quantity.unit)

  recipe.ingredients.forEach((ingredient, i) => {
    recipeIngredientListSection.innerHTML += '';
    recipeIngredientListSection.innerHTML += `<li>${ingredientNames[i]} | ${ingredientQuantities[i]} ${ingredientUnits[i]}<li>`
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

 const showSavedRecipes = () => {
  allRecipesBox.innerHTML = ''
  
  allRecipesBox.innerHTML += `<article class="recipe all-recipe-box" id="${recipe.id}">
  <img class="recipe all-recipe-image" src="${recipe.image}">
  <h3 class="recipe">${recipe.name}</h3>
  </article>`
};

}

export {  
  showRecipesPage, 
  showDomElement, 
  hideDomElement, 
  showHomePage,
  displayRecipes, 
  showRecipePage, 
  displayRecipe, 
  searchRecipeByName, 
  showRecipeByTag
}