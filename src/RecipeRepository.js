const filterByTag = (recipeData, tag) => {
  const filteredRecipes = recipeData.filter((recipe) => recipe.tags.includes(tag.toLowerCase()))
  
  // Suggested Change: Put this conditional in a helper function; we use it multiple times
  if (filteredRecipes.length) {
    return filteredRecipes
  } else {
    // Suggested Change: Instead of returning this sad path message, invoke a function that displays this message to the DOM; OR do both so this path is still testable
    return "Sorry, No Recipes Were Found!"
  };
};

const filterByName = (recipeData, searchInput) => {
  console.log(searchInput);
  const searchTerms = searchInput.toLowerCase().split(' ');
  const formattedSearch = searchTerms.map(word => capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const filteredRecipes = recipeData.filter(recipe => recipe.name.includes(formattedSearch));
  // See suggestions in above function
  if (filteredRecipes.length) {
    return filteredRecipes
  } else {
    return "Sorry, No Recipes Were Found!"
  };
};

// I removed the conditional and sad path test for this function because it will only ever run when triggered by an event listener.
const getInstructions = (recipe) => {
  return recipe.instructions.reduce((acc, index) => {
    acc[index.number] = index.instruction
    return acc
  }, {});
};

const listIngredients = (ingredientData, recipe) =>  {
  const ingredientIds = recipe.ingredients.map(ingredient => ingredient.id);
  const ingredientNames = ingredientIds.map(id => {
    const ingredientIndex = ingredientData.findIndex(ingredient => id === ingredient.id)
    return ingredientData[ingredientIndex].name
    });

  return ingredientNames;
};

const calcRecipeCost = (ingredientData, recipe) => {
  /*
  start with value 0
  1. make list of ingredients ✅
  2. map through recipe ingredients ✅
    a. iterate through ingredients info array for each ingredient to find the ingredient info (returns object) ✅
    b. take ingredientInfo that was found and get ingredient cost ✅
    c. take cost and multiply it by quantity from recipe - return totalIngredientCost ✅
  4.  add totalIngredientCost to counter ✅
  5. return total cost ✅
  6. transform totalcost into a number with two decimal places ✅
  */

  const ingredientsCosts = recipe.ingredients.map(recipeIngredient => {
    const currentIngredient = ingredientData.find(ingredient => ingredient.id === recipeIngredient.id); 
    const currentIngredientCost = currentIngredient.estimatedCostInCents * recipeIngredient.quantity.amount

    return currentIngredientCost
  })

  const totalCost = parseFloat((ingredientsCosts.reduce((total, cost) => total + cost, 0)/100)).toFixed(2)

  return totalCost
};

const selectRandomUser = (users) => {
  const index = Math.floor(Math.random(users.length - 1));
  const user = users[index];
  return user;
}

const saveRecipe = (userData, recipeData) => {
  userData.recipesToCook ? userData.recipesToCook.push(recipeData) : userData.recipesToCook =[recipeData];
  return userData;
};


module.exports = {
  filterByTag,
  filterByName,
  getInstructions,
  listIngredients,
  calcRecipeCost,
  selectRandomUser, 
  saveRecipe
};
