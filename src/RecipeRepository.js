const filterByTag = (data, tag) => {
  const filteredRecipes = data.filter((recipe) => recipe.tags.includes(tag.toLowerCase()))
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

const getInstructions = (data, name) => {
  const foundRecipe = data.find((recipe) => recipe.name.toLowerCase() === name.toLowerCase())
    if (foundRecipe === undefined) {
      return "Sorry, No Recipes Were Found!"
    } else {
    return foundRecipe.instructions.reduce((acc, index) => {
      acc[index.number] = index.instruction
      return acc
    }, {})
  }
}

const calcRecipeCost = (infos, recipe) => {
  /*
  start with value 0
  1. make list of ingredients ✅
  2. map through recipe ingredients ✅
    a. iterate through ingredients info array for each ingridient to find the ingredient info (returns object) ✅
    b. take ingrdientInfo that was found and get ingredient cost ✅
    c. take cost and multiply it by quantity from recipe - return totalIngredientCost ✅
  4.  add totalIngredientCost to counter ✅
  5. return total cost ✅
  6. transform totalcost into a number with two decimal places ✅
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
  getInstructions,
  calcRecipeCost
};
