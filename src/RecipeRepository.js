const filterByTag = (recipeData, tag) => {
  const filteredRecipes = recipeData.filter((recipe) => recipe.tags.includes(tag.toLowerCase()))
  
  // Suggested Change: Put this conditional in a helper function; we use it multiple times
  if (filteredRecipes.length) {
    return filteredRecipes
  } else {
    // Suggested Change: Instead of returning this sad path message, invoke a function that displays this message to the DOM; or do both so this path is still testable
    return "Sorry, No Recipes Were Found!"
  };
};

const filterByName = (recipeData, searchInput) => {
  const searchTerms = searchInput.toLowerCase().split(' ');
  const searchToMatch = searchTerms.map(word => (word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

  const filteredRecipes = recipeData.filter(recipe => recipe.name.includes(searchToMatch));

  // See suggestions in above function
  if (filteredRecipes.length) {
    return filteredRecipes
  } else {
    return "Sorry, No Recipes Were Found!"
  };
};

const getInstructions = (data, name) => {
  const foundRecipe = data.find((recipe) => recipe.name.toLowerCase() === name.toLowerCase())
    if (foundRecipe === undefined) {
      return "Sorry, No Recipes Were Found!"
    } else {
    return foundRecipe.instructions.reduce((acc, index) => {
      acc[index.number] = index.instruction
      return acc
    }, {});
  };
};

const listIngredients = (recipeData, ingredientData, selectedRecipe) =>  {
  const recipe = recipeData.find(recipe => recipe.name === selectedRecipe);
  const ingredientIds = recipe.ingredients.map(ingredient => ingredient.id);

  const ingredientNames = ingredientIds.map(id => {
    const ingredientIndex = ingredientData.findIndex(ingredient => id === ingredient.id)
    return ingredientData[ingredientIndex].name
    })

  return ingredientNames;
};

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
};


module.exports = {
  filterByTag,
  filterByName,
  getInstructions,
  listIngredients,
  calcRecipeCost
};
