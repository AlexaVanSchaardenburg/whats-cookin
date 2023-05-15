const chai = require('chai');
const expect = chai.expect
const {mockRecipeData} = require('../src/data/mockRecipe')
const {filterByTag} = require('../src/RecipeRepository');

describe('Filter', () => {
  
  let recipes;

  beforeEach(() => {
  return recipes = mockRecipeData
  });

  it('Should filter recipes by tags', () => {
    
    const filteredRecipes1 = filterByTag(recipes,'sauce')

    expect(filteredRecipes1).to.deep.equal([{
      "id": 412309,
      "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 2031,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 5100,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 2009,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 6168,
          "quantity": {
            "amount": 8,
            "unit": "cups"
          }
        },
        {
          "id": 9176,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2026,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1042047,
          "quantity": {
            "amount": 1.5,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1042047,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
          "number": 1
        }
      ],
      "name": "Dirty Steve's Original Wing Sauce",
      "tags": [
        "sauce"
      ]
    }])

  });
  it('Should return a message if no recieps match the tag filter', () => {

    const filteredRecipes2 = filterByTag(recipes,'javascript')

    expect(filteredRecipes2).to.equal("Sorry, No Recipes Were Found!")
  })
  it('Should filter recipes by search', function(){
      const filteredRecipes = filterByName('')

      expect(filteredRecipes).to.deep.equal(/* Array of sample data filterd for key word appears here */)
  });
  it('Should return a message if no recipes match the search', function(){
      const filteredRecipes = filterByName('')

      expect(filteredRecipes).to.equal(/* message */)
  });
});

// describe('Filter by name', function(){
//   const recipes = recipeSampleData
//   it('should be a function', function(){
//       filterByName = filterByName()
//       expect(filterByName).to.be.a('function')
//   });
//   it('Should return an array of recipes with matching name', function(){
//       const filteredRecipes = filterByName('')

//       expect(filteredRecipes).to.deep.equal(/* Array of sample data filterd for key word appears here */)
//   });
//   it('Should return an array of recipes with matching name', function(){
//       const filteredRecipes = filterByName('')

//       expect(filteredRecipes).to.deep.equal(/* Array of sample data filterd for key word appears here */)
//   });
// });
// describe('Filter by tag', function(){

// });