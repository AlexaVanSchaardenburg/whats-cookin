const filterByTag = (data, tag) => {
  const filteredRecipes = data.filter((recipe) => recipe.tags.includes(tag))
   if (filteredRecipes.length < 1) {
    return "Sorry, No Recipes Were Found!"
   } else {
    return filteredRecipes
   }
}

const filterByName = (data, search) => {
  //want to take search and look in the datas names to check if that word is there 
  //return that whole object if it is, if not return message that nothing was found
  //use filter 
  // searchLowercase = search.toLowerCase()
  const filteredRecipes = data.filter((recipe) => recipe.name.includes(search.toLowerCase()))
  if (filteredRecipes.length < 1) {
    return "Sorry, No Recipes Were Found!"
   } else {
    return filteredRecipes
   }
}


module.exports = {
  filterByTag,
  filterByName
};
