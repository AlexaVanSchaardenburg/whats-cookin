//NOTE: Your DOM manipulation will occur in this file

//DOM Functions

const hideDomElement = (element) => {
  element.classList.add('hidden')
}

const showDomElement = (element) => {
  element.classList.remove('hidden')
}

const showRecipesPage = (homePage, allRecipesPage) => {
  hideDomElement(homePage)
  showDomElement(allRecipesPage)
}

const displayAllRecipes = (data, recipeBox) => {
  console.log(data)
  data.forEach((recipe) => {
  recipeBox.innerHTML += `<article class="all-recipe-box" id="${recipe.id}">
  <img class="all-recipe-image" src="${recipe.image}">
  <h3>${recipe.name}</h3>
  </article>`})
}

export {showRecipesPage, showDomElement, hideDomElement, displayAllRecipes}