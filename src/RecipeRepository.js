const filterByTag = (data, tag) => {
  const filteredRecipes = data.filter((recipe) => recipe.tags.includes(tag))
   if (filteredRecipes.length < 1) {
    return "Sorry, No Recipes Were Found!"
   } else {
    return filteredRecipes
   }
}

const filterByName = (data, search) => {
  const searchAllLowerCase = search.toLowerCase()
  const arrOfWords = searchAllLowerCase.split(' ')
  const searchProper = arrOfWords.map(word => {
    return upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1)
  })
  const finalSearch = searchProper.join(' ')
  const filteredRecipes = data.filter(recipe => {
    return recipe.name.includes(finalSearch)
  })
  if(filteredRecipes.length < 1){
    return "Sorry, No Recipes Were Found!"
  }else{
    return filteredRecipes
  }
}

const calcRecipeCost = () => {
  //takes in recipe and outputs number
  // needs to acess list of ingredients
  //for each ingrident it needs to check if the ingrident is an ingredient in the ingredient list
    //if yes access that ingredients cost and multiply it by the quantity needed from recipe and add that number to the counter
  //then convert number into correct format and return as number with two decimal places

  //reduce? forEach? 
  /*
  start with value 0
  1. make list of ingredients
  2. iterate through ingredients info array for each ingridient - return the ingreidents cost
  3.  take cost and multiply it by quantity from recipe - return totalIngredientCost
  4.  
  */
}


module.exports = {
  filterByTag,
  filterByName,
  calcRecipeCost
};
