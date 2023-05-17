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

const displayAllRecipes = (recipeBox) => {
  recipeBox.innerHTML = 
}


//iterate over array of recipes (FOREACH?)
//for each element we want to display the name and image



{/* <article class="all-recipe-box">
<img class="all-recipe-image" src="../images/turing-logo.png">
<h3>Recipe Title</h3>
</article> */}
export {showRecipesPage, showDomElement, hideDomElement, displayAllRecipes}