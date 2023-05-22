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
  saveRecipeButton,
  user,
  goToRecipesButton,
  viewSavedRecipesButton,
  deleteRecipeButton,
  currentView
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

  if (currentView === 'saved') {
    showDomElement(goToRecipesButton)
    hideDomElement(viewSavedRecipesButton)
  } else {
    showDomElement(viewSavedRecipesButton)
    hideDomElement(goToRecipesButton)
  }
};

const showRecipePage = () => {
  hideDomElement(allRecipesPage)
  showDomElement(recipePage)
  showDomElement(goToRecipesButton)
  showDomElement(viewSavedRecipesButton)
};

const displayRecipes = (data) => {
  allRecipesBox.innerHTML = "";
  if (!data || !data.length) {
    allRecipesBox.innerHTML = `<p>Sorry, No recipes were found!</p>`
  } else {
    data.forEach((recipe) => {
      allRecipesBox.innerHTML += `<article class="recipe all-recipe-box" id="${recipe.id}">
      <img class="recipe all-recipe-image" src="${recipe.image}">
      <h3 class="recipe">${recipe.name}</h3>
      </article>`})
  }
};

const searchRecipeByName = (currentView, searchInput) => {
  let filteredNames;
  if (currentView === 'saved') {
    filteredNames = filterByName(user.recipesToCook, searchInput.value);
  } else {
    filteredNames = filterByName(recipeData, searchInput.value);
  }
  
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
  toggleRecipeButtons(recipe) 
  displayIngredients(ingredientsData, recipe)
  displayInstructions(recipe) 

  recipePageImage.src = recipe.image;
  recipePageNameSection.innerText = recipe.name;
  saveRecipeButton.setAttribute('id', `${recipe.id}`)

  recipeTagsSection.innerHTML = ''
  recipe.tags.forEach(tag => {
    recipeTagsSection.innerHTML += `<li>#${tag}</li>`
  })

  const recipeCost = calcRecipeCost(ingredientsData, recipe);
  recipeCostSection.innerText = `Total Cost: $${recipeCost}`  
};

const toggleRecipeButtons = (recipe) => {
  const alreadySaved = !user.recipesToCook || user.recipesToCook.some(savedRecipe => savedRecipe === recipe)
  
  if (!user.recipesToCook || !alreadySaved) {
    hideDomElement(deleteRecipeButton);
    showDomElement(saveRecipeButton)
  } else {
    hideDomElement(saveRecipeButton);
    showDomElement(deleteRecipeButton)
  }
}

const displayIngredients = (ingredientsData, recipe) => {
  const ingredientNames = getIngredientInfo(ingredientsData, recipe, 'name');
  const ingredientQuantities = recipe.ingredients.map(ingredient => ingredient.quantity.amount);
  const ingredientUnits = recipe.ingredients.map(ingredient => ingredient.quantity.unit)

  recipeIngredientListSection.innerHTML += '';
  recipe.ingredients.forEach((ingredient, i) => {
    recipeIngredientListSection.innerHTML += `<li>${ingredientNames[i]} | ${ingredientQuantities[i]} ${ingredientUnits[i]}`
  })  
}

const displayInstructions = (recipe) => {
  const recipeInstructions = getInstructions(recipe)
  const numSteps = Object.keys(recipeInstructions)
  numSteps.forEach(step => {
   recipeInstructionsSection.innerHTML += `<li>${recipeInstructions[step]}`
  })
}

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
  const recipe = recipeData.find((index) => index.id === parseInt(event.target.id))
  saveRecipe(user, recipe)
  hideDomElement(saveRecipeButton)
  showDomElement(deleteRecipeButton)
};

const deleteSelectedRecipe = (event, user, recipeData) => {
  const recipe = recipeData.find((index) => index.id === parseInt(event.target.id))
  deleteRecipe(user, recipe)
  hideDomElement(deleteRecipeButton)
  showDomElement(saveRecipeButton)
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
  deleteSelectedRecipe
}