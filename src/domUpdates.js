import {recipeData, user} from './apiCalls'

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
  recipeTags,
  saveRecipeButton,
  goToRecipesButton,
  viewSavedRecipesButton,
  deleteRecipeButton,
  currentView,
  outputCurrency,
  currency
} from './scripts.js'

import { 
  filterByTag,
  filterByName,
  getInstructions,
  getIngredientNames,
  calcRecipeCost,
  saveRecipe,
  deleteRecipe
} from '../src/RecipeRepository.js';

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
  outputCurrency.value = ''
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
      allRecipesBox.innerHTML += `<button class="recipe all-recipe-box" id="${recipe.id}">
      <img class="recipe all-recipe-image" alt="Photo of ${recipe.name}" src="${recipe.image}">
      <h3 class="recipe">${recipe.name}</h3>
      </button>`})
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

const showRecipeByTag = (currentView) => {
  allRecipesBox.innerHTML = ''

  let filteredTags;
  if (currentView === 'saved') {
    filteredTags = filterByTag(user.recipesToCook, recipeTags.value);
  } else {
    filteredTags = filterByTag(recipeData, recipeTags.value);
  }

  if (typeof filteredTags === 'string') {
    allRecipesBox.innerHTML = "";
    allRecipesBox.innerHTML = `<p>${filteredTags}</p>`
  } else {
    displayRecipes(filteredTags);
  }
};

const selectRecipe = (e) => {
  const recipe = recipeData.find(recipe => recipe.id === parseInt(e.target.closest('button').id))
  return recipe
};

const displayRecipe = (ingredientsData, event) => {
  const recipe = selectRecipe(event)
  toggleRecipeButtons(recipe) 
  displayIngredients(ingredientsData, recipe)
  displayInstructions(recipe) 


  recipePageImage.alt = `Photo of ${recipe.name}`
  recipePageImage.src = recipe.image;
  recipePageNameSection.innerText = recipe.name;
  saveRecipeButton.setAttribute('id', `${recipe.id}`)
  deleteRecipeButton.setAttribute('id', `${recipe.id}`)

  recipeTagsSection.innerHTML = ''
  recipe.tags.forEach(tag => {
    recipeTagsSection.innerHTML += `<li>#${tag}</li>`
  })

  const recipeCost = calcRecipeCost(ingredientsData, recipe);
  recipeCostSection.innerText = `Total Cost: $${recipeCost}`
  recipeCostSection.value = recipeCost  
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
  const ingredientNames = getIngredientNames(ingredientsData, recipe, 'name');
  const ingredientQuantities = recipe.ingredients.map(ingredient => ingredient.quantity.amount);
  const ingredientUnits = recipe.ingredients.map(ingredient => ingredient.quantity.unit)

  recipeIngredientListSection.innerHTML = '';
  recipe.ingredients.forEach((ingredient, i) => {
    recipeIngredientListSection.innerHTML += `<li>${ingredientNames[i]} | ${ingredientQuantities[i]} ${ingredientUnits[i]}`
  })  
}

const displayInstructions = (recipe) => {
  const recipeInstructions = getInstructions(recipe)
  const numSteps = Object.keys(recipeInstructions)
  recipeInstructionsSection.innerHTML = '';
  numSteps.forEach(step => {
   recipeInstructionsSection.innerHTML += `<li>${recipeInstructions[step]}`
  })
}

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

const convertCurrency = () => { 
  if (currency[0].value) {
fetch(`https://api.frankfurter.app/latest?amount=${recipeCostSection.value}&from=USD&to=${currency[0].value}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      return response.json();
    }
})
  .then((data) => {
    outputCurrency.value = Object.values(data.rates)[0]
  })
  .catch(error => alert(`${error.message}`));
  }
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
  deleteSelectedRecipe,
  convertCurrency
}