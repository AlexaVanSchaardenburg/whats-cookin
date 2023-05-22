const findLength = (array) => {
  if (array.length) {
    return array
  } else {
    return "Sorry, No Recipes Were Found!"
  };
};

const filterByTag = (recipeData, tag) => {
  const filteredRecipes = recipeData.filter((recipe) => recipe.tags.includes(tag.toLowerCase()))
  return findLength(filteredRecipes)
};

const filterByName = (recipeData, searchInput) => {
  const searchTerms = searchInput.toLowerCase().split(' ');
  const formattedSearch = searchTerms.map(word => capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const filteredRecipes = recipeData.filter(recipe => recipe.name.includes(formattedSearch));
  return findLength(filteredRecipes)
};

const getInstructions = (recipe) => {
  return recipe.instructions.reduce((acc, index) => {
    acc[index.number] = index.instruction
    return acc
  }, {});
};

const getIngredientNames = (ingredientData, recipe) =>  {
  const ingredientIds = recipe.ingredients.map(ingredient => ingredient.id);
  const ingredientNames = ingredientIds.map(id => {
    const ingredientIndex = ingredientData.findIndex(ingredient => id === ingredient.id)
    return ingredientData[ingredientIndex].name
    });
  return ingredientNames;
};

const calcRecipeCost = (ingredientData, recipe) => {
  const ingredientsCosts = recipe.ingredients.map(recipeIngredient => {
    const currentIngredient = ingredientData.find(ingredient => ingredient.id === recipeIngredient.id); 
    const currentIngredientCost = currentIngredient.estimatedCostInCents * recipeIngredient.quantity.amount
    return currentIngredientCost
  })
  const totalCost = parseFloat((ingredientsCosts.reduce((total, cost) => total + cost, 0)/100)).toFixed(2)
  return totalCost
};

const selectRandomUser = (users) => {
  const index = Math.floor(Math.random() * users.length - 1);
  const aUser = users[index];
  return aUser;
}

const saveRecipe = (userData, recipeData) => {
  userData.recipesToCook || (userData.recipesToCook = []);
  if (!userData.recipesToCook.includes(recipeData)) {
    userData.recipesToCook.push(recipeData)
  }
  return userData;
};

const deleteRecipe = (userData, recipeData) => {
 userData.recipesToCook.splice(userData.recipesToCook.indexOf(recipeData), 1);
 return userData;
}

module.exports = {
  filterByTag,
  filterByName,
  getInstructions,
  getIngredientNames,
  calcRecipeCost,
  selectRandomUser, 
  calcRecipeCost, 
  saveRecipe,
  deleteRecipe,
  selectRandomUser
};
