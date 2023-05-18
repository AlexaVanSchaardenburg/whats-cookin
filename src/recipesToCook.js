const saveRecipe = (userData, recipeData) => {
  if (userData.recipesToCook) {
    userData.recipesToCook.push(recipeData);
  } else {
    userData.recipesToCook =[recipeData];
  }
  return userData;
};

module.exports = {saveRecipe};