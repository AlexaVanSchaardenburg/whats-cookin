const saveRecipe = (userData, recipeData) => {
  userData.recipesToCook ? userData.recipesToCook.push(recipeData) : userData.recipesToCook =[recipeData];
  return userData;
};

module.exports = {saveRecipe};