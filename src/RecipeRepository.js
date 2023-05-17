const filterByTag = (data, tag) => {
  const filteredRecipes = data.filter((recipe) => recipe.tags.includes(tag))
   if (filteredRecipes.length < 1) {
    return "Sorry, No Recipes Were Found!"
   } else {
    return filteredRecipes
   }
}

const filterByName = (data, search) => {
  const finalSearch = search.toLowerCase().split(' ').map(word => upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const filteredRecipes = data.filter(recipe => {
    return recipe.name.includes(finalSearch)
  })
  if(filteredRecipes.length < 1){
    return "Sorry, No Recipes Were Found!"
  }else{
    return filteredRecipes
  }
}

const calcRecipeCost = (infos, recipe) => {
  //takes in recipe and outputs number
  // needs to acess list of ingredients
  //for each ingrident it needs to check if the ingrident is an ingredient in the ingredient list
    //if yes access that ingredients cost and multiply it by the quantity needed from recipe and add that number to the counter
  //then convert number into correct format and return as number with two decimal places

  //reduce? forEach? 
  /*
  start with value 0
  1. make list of ingredients ✅
  2. map through recipe ingredients ✅
    a. iterate through ingredients info array for each ingridient to find the ingredient info (returns object) ✅
    b. take ingrdientInfo that was found and get ingredient cost ✅
    c. take cost and multiply it by quantity from recipe - return totalIngredientCost ✅
  4.  add totalIngredientCost to counter ✅
  5. return total cost ✅
  6. transform totalcost into a number with two decimal places
  */

  const ingredientsCosts = recipe.ingredients.map(ingredient => {
    const currentInfo = infos.find(info => info.id === ingredient.id) 
    const currentIngredientCost = currentInfo.estimatedCostInCents * ingredient.quantity.amount
    return currentIngredientCost
    }
    )

  const totalCost = parseFloat((ingredientsCosts.reduce((total, cost) => total + cost, 0)/100)).toFixed(2)
  return totalCost

}


module.exports = {
  filterByTag,
  filterByName,
  calcRecipeCost
};
