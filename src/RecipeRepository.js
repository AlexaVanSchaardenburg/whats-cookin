const filterByTag = (data, tag) => {
  const filteredRecipes = data.filter((recipe) => recipe.tags.includes(tag))
   if (filteredRecipes.length < 1) {
    return "Sorry, No Recipes Were Found!"
   } else {
    return filteredRecipes
   }
}


module.exports = {
  filterByTag,
};