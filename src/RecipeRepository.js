const filterByTag = (tag) => {
  console.log()
  return data.filter((recipe) => recipe.tags.includes(tag))
    .map(recipe => recipe.name)
  }


module.exports = {
  filterByTag,
};