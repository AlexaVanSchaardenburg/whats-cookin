//NOTE: Your DOM manipulation will occur in this file
import {recipeData} from './data/recipes'
import {ingredientsData} from './data/ingredients'
import { usersData } from './data/users';

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
  savedRecipesPage,
  saveRecipesButton,
  savedRecipesBox,
  user

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

const showRecipesPage = () => {
  showDomElement(allRecipesPage)
  hideDomElement(recipePage)
  hideDomElement(savedRecipesPage)

};

const showRecipePage = () => {
  hideDomElement(allRecipesPage)
  hideDomElement(savedRecipesPage)
  showDomElement(recipePage)
};

const showSavedRecipesPage = () => {
  hideDomElement(allRecipesPage)
  hideDomElement(recipePage)
  showDomElement(savedRecipesPage)
}

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
  saveRecipesButton.setAttribute('id', `${recipe.id}`)
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
};

const saveSelectedRecipe = (event, user, recipeData) => {
  //const recipe = recipeData.filter((index) => index.id === parseInt(event.target.id))
  const recipe = recipeData.find((index) => index.id === parseInt(event.target.id))
  saveRecipe(user, recipe)
  console.log(user)
  savedRecipesBox.innerHTML += " "
    savedRecipesBox.innerHTML += `<article class="recipe saved-recipe-box" id="${recipe.id}">
    <img class="recipe saved-recipe-image" src="${recipe.image}">
    <h3 class="recipe">${recipe.name}</h3>
    </article>`
};

const deleteSelectedRecipe = (event, user, recipeData) => {
  const recipe = recipeData.find((index) => index.id === parseInt(event.target.closest('article').id))
  deleteRecipe(user, recipe)
  console.log(user.recipesToCook)
  event.target.closest('article').remove()
  //still need to remove recipe from the Dom. 
  //Refactor event listener from dblclick to delete button?
  //Need to make sure existing recipe cannot be added to array
};

export {  
  showRecipesPage, 
  showDomElement, 
  hideDomElement, 
  displayRecipes, 
  showRecipePage, 
  displayRecipe, 
  searchRecipeByName, 
  showRecipeByTag,
  saveSelectedRecipe,
  showSavedRecipesPage,
  deleteSelectedRecipe
}