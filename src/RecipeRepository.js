// const { usersData } = require("./data/users");
// import {recipeData, usersData, ingredientsData} from './apiCalls'


const filterByTag = (recipeData, tag) => {
  const filteredRecipes = recipeData.filter((recipe) => recipe.tags.includes(tag.toLowerCase()))
  
  // Suggested Change: Put this conditional in a helper function; we use it multiple times
  if (filteredRecipes.length) {
    return filteredRecipes
  } else {
    return "Sorry, No Recipes Were Found!"
  };
};

const filterByName = (recipeData, searchInput) => {
  const searchTerms = searchInput.toLowerCase().split(' ');
  const formattedSearch = searchTerms.map(word => capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const filteredRecipes = recipeData.filter(recipe => recipe.name.includes(formattedSearch));
  // See above suggestions
  if (filteredRecipes.length) {
    return filteredRecipes
  } else {
    return "Sorry, No Recipes Were Found!"
  };
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
  // console.log(users)
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
