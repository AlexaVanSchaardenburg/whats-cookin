const filterByTag = (data, tag) => {
  const filteredRecipes = data.filter((recipe) => recipe.tags.includes(tag.toLowerCase()))
   if (filteredRecipes.length < 1) {
    return "Sorry, No Recipes Were Found!"
   } else {
    return filteredRecipes
   }
}

const filterByName = (data, search) => {
  const searchAllLowerCase = search.toLowerCase()
  const arrOfWords = searchAllLowerCase.split(' ')
  const searchProper = arrOfWords.map(word => {
    return upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1)
  })
  const finalSearch = searchProper.join(' ')
  const filteredRecipes = data.filter(recipe => {
    return recipe.name.includes(finalSearch)
  })
  if(filteredRecipes.length < 1){
    return "Sorry, No Recipes Were Found!"
  }else{
    return filteredRecipes
  }
}

const getInstructions = (data, name) => {
  const foundRecipe = data.find((recipe) => recipe.name.toLowerCase() === name.toLowerCase())
    if (foundRecipe === undefined) {
      return "Sorry, No Recipes Were Found!"
    } else {
    return foundRecipe.instructions.reduce((acc, index) => {
      acc[index.number] = index.instruction
      return acc
    }, {})
  }
}


module.exports = {
  filterByTag,
  filterByName,
  getInstructions,
};
