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
  saveRecipesButton

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

const user = {
  "name": "Noe Conroy",
  "id": 39,
  "recipesToCook": [],
  "pantry": [
    {
      "ingredient": 4053,
      "amount": 4
    },
    {
      "ingredient": 1032009,
      "amount": 7
    },
    {
      "ingredient": 12135,
      "amount": 2
    },
    {
      "ingredient": 11282,
      "amount": 5
    },
    {
      "ingredient": 15152,
      "amount": 3
    },
    {
      "ingredient": 2031,
      "amount": 2
    },
    {
      "ingredient": 1053,
      "amount": 2
    },
    {
      "ingredient": 1214,
      "amount": 2
    },
    {
      "ingredient": 14412,
      "amount": 5
    },
    {
      "ingredient": 19335,
      "amount": 4
    },
    {
      "ingredient": 1145,
      "amount": 5
    },
    {
      "ingredient": 4025,
      "amount": 3
    },
    {
      "ingredient": 1077,
      "amount": 2
    },
    {
      "ingredient": 1082047,
      "amount": 5
    },
    {
      "ingredient": 2050,
      "amount": 5
    },
    {
      "ingredient": 1124,
      "amount": 3
    },
    {
      "ingredient": 1001,
      "amount": 2
    },
    {
      "ingredient": 1123,
      "amount": 7
    },
    {
      "ingredient": 20081,
      "amount": 4
    },
    {
      "ingredient": 18372,
      "amount": 5
    },
    {
      "ingredient": 11215,
      "amount": 8
    },
    {
      "ingredient": 11291,
      "amount": 4
    },
    {
      "ingredient": 14106,
      "amount": 4
    },
    {
      "ingredient": 1002030,
      "amount": 3
    },
    {
      "ingredient": 1033,
      "amount": 3
    },
    {
      "ingredient": 2027,
      "amount": 3
    },
    {
      "ingredient": 16124,
      "amount": 2
    },
    {
      "ingredient": 11821,
      "amount": 3
    },
    {
      "ingredient": 11297,
      "amount": 2
    },
    {
      "ingredient": 12142,
      "amount": 2
    },
    {
      "ingredient": 19336,
      "amount": 2
    },
    {
      "ingredient": 1102047,
      "amount": 3
    },
    {
      "ingredient": 6150,
      "amount": 2
    },
    {
      "ingredient": 11124,
      "amount": 2
    },
    {
      "ingredient": 2047,
      "amount": 7
    },
    {
      "ingredient": 11529,
      "amount": 2
    },
    {
      "ingredient": 93607,
      "amount": 2
    },
    {
      "ingredient": 12061,
      "amount": 2
    },
    {
      "ingredient": 2028,
      "amount": 2
    },
    {
      "ingredient": 2009,
      "amount": 2
    }
  ]
}

// const selectRandomUser = (users, user) => {
//   const index = Math.floor(Math.random() * users.length + 1);
//   user = users[index];
//   console.log(user)
//   return user;
// }

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
  homeButton.classList.add('invisible');
}

const showRecipesPage = () => {
  homeButton.classList.remove('invisible')
  hideDomElement(homePage)
  showDomElement(allRecipesPage)
};

const findRecipeById = (id, recipeData) => {
  const recipe = recipeData.find((recipe) => recipe.id === id)
  return recipe
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

const saveSelectedRecipe = (event, user) => {
 const recipe = findRecipeById(parseInt(event.target.id), recipeData)
 user.recipesToCook.push(recipe)
 console.log(user)
};

export {  
  showRecipesPage, 
  showDomElement, 
  hideDomElement, 
  showHomePage,
  displayRecipes, 
  showRecipePage, 
  displayRecipe, 
  searchRecipeByName, 
  showRecipeByTag,
  user,
  saveSelectedRecipe
}