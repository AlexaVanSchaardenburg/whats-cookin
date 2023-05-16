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
  // const filteredRecipes = data.filter((recipe) => {
  //   console.log(recipe['name'.toLowerCase()])
  //   console.log(search.toLowerCase())
  //   return recipe['name'.toLowerCase()].includes(search.toLowerCase())
  // })
  const searchLowerCase = search.toLowerCase()
  const searchProper  = searchLowerCase.charAt(0)
  const filteredRecipes = data.filter((recipe) => {
    console.log(recipe.name)
    return recipe.name.includes(searchProper)
  })
  // if (filteredRecipes.length < 1) {
  //   return "Sorry, No Recipes Were Found!"
  //  } else {
    return filteredRecipes
  //  }
}


module.exports = {
  filterByTag,
  filterByName
};
