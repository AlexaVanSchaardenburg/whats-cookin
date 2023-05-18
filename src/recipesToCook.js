const selectRandomUser = (users) => {
  const index = Math.floor(Math.random(users.length - 1));
  const user = users[index];
  return user;
}

const saveRecipe = (userData, recipeData) => {
  userData.recipesToCook ? userData.recipesToCook.push(recipeData) : userData.recipesToCook =[recipeData];
  return userData;
};

module.exports = {selectRandomUser, saveRecipe};