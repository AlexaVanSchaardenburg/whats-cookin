//NOTE: Your DOM manipulation will occur in this file
import{homePage, allRecipesPage, recipePage, allRecipesBox, recipeTags} from './scripts.js'
import {recipeData} from './data/recipes.js'

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
    //iterate through the recipes data and find the recipe with the matching id to the elements id that was clicked. - FUNCTION
    return selectedRecipe = recipeData.find(recipe => recipe.id === e.id)
};

const displayRecipe = (event) => {
  //needs to take in an event target as the parameter -- event listener listens for click on page and returns the element that was clicked (child element) -- put event listener on allRecipesBox - IN SCRIPT.JS FILE
  const recipe = selectRecipe(event)
  //display the selected recipes name, ingredients, instructions, and total cost on the individual recipe page using helper functions from RecipeRepository.js file
  showRecipePage()
};

const showRecipeByTag = () => {
  const selectedTag = recipeTags.value
  return recipeData.filter((recipe) => {
    const tagged = document.getElementById(recipe.id);
    if (!recipe.tags.includes(selectedTag)) {
      hideDomElement(tagged)
    } else {
      showDomElement(tagged)
    }
  })
}

export {showRecipesPage, showDomElement, hideDomElement, displayAllRecipes, displayRecipe, showRecipeByTag}