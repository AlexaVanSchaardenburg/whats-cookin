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
  const searchAllLowerCase = search.toLowerCase()
  console.log(searchAllLowerCase)
  const arrOfWords = searchAllLowerCase.split(' ')
  console.log(arrOfWords)
  const searchProper = arrOfWords.map(word => {
    return upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1)}
    )
  console.log(searchProper)
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


module.exports = {
  filterByTag,
  filterByName
};
