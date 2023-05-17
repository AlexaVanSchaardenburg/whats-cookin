const chai = require('chai');
const expect = chai.expect
const {mockRecipeData} = require('../src/data/mockRecipe');
const {mockIngredientsData} = require('../src/data/mockIngredients');
const {filterByTag, filterByName, getInstructions, listIngredients, calcRecipeCost} = require('../src/RecipeRepository');

describe('Filtering Functions', () => {
  
  let recipes;
  beforeEach(() => {
    return recipes = mockRecipeData
  });

  it('Should return an array of recipes with matching tags', () => {
    const filteredRecipes1 = filterByTag(recipes,'sauce')

    expect(filteredRecipes1).to.deep.equal([
      {
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

  it('Should return a message if no recipes match the tag filter', () => {
    const filteredRecipes2 = filterByTag(recipes,'javascript')

    expect(filteredRecipes2).to.equal("Sorry, No Recipes Were Found!")
  });

  it('Should return an array of recipes with names that match the search term', function(){
    const filteredRecipes = filterByName(recipes, 'Cookie')

    expect(filteredRecipes).to.deep.equal([
        {
          "id": 595736,
          "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
          "ingredients": [
            {
              "id": 20081,
              "quantity": {
                "amount": 1.5,
                "unit": "c"
              }
            },
            {
              "id": 18372,
              "quantity": {
                "amount": 0.5,
                "unit": "tsp"
              }
            },
            {
              "id": 1123,
              "quantity": {
                "amount": 1,
                "unit": "large"
              }
            },
            {
              "id": 19335,
              "quantity": {
                "amount": 0.5,
                "unit": "c"
              }
            },
            {
              "id": 19206,
              "quantity": {
                "amount": 3,
                "unit": "Tbsp"
              }
            },
            {
              "id": 19334,
              "quantity": {
                "amount": 0.5,
                "unit": "c"
              }
            },
            {
              "id": 2047,
              "quantity": {
                "amount": 0.5,
                "unit": "tsp"
              }
            },
            {
              "id": 1012047,
              "quantity": {
                "amount": 24,
                "unit": "servings"
              }
            },
            {
              "id": 10019903,
              "quantity": {
                "amount": 2,
                "unit": "c"
              }
            },
            {
              "id": 1145,
              "quantity": {
                "amount": 0.5,
                "unit": "c"
              }
            },
            {
              "id": 2050,
              "quantity": {
                "amount": 0.5,
                "unit": "tsp"
              }
            }
          ],
          "instructions": [
            {
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
              "number": 1
            },
            {
              "instruction": "Add egg and vanilla and mix until combined.",
              "number": 2
            },
            {
              "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
              "number": 3
            },
            {
              "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
              "number": 4
            },
            {
              "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
              "number": 5
            },
            {
              "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
              "number": 6
            }
          ],
          "name": "Loaded Chocolate Chip Pudding Cookie Cups",
          "tags": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
          ]
    }]);
  });

  it('Should filter recipes by search regardless of letter case', function(){
    const filteredRecipes = filterByName(recipes, 'cOoKiE')

    expect(filteredRecipes).to.deep.equal([
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          },
          {
            "id": 19335,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "id": 19206,
            "quantity": {
              "amount": 3,
              "unit": "Tbsp"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "id": 2047,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "id": 1012047,
            "quantity": {
              "amount": 24,
              "unit": "servings"
            }
          },
          {
            "id": 10019903,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "id": 1145,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "id": 2050,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            "number": 1
          },
          {
            "instruction": "Add egg and vanilla and mix until combined.",
            "number": 2
          },
          {
            "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
            "number": 3
          },
          {
            "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
            "number": 4
          },
          {
            "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
            "number": 5
          },
          {
            "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
            "number": 6
          }
        ],
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "tags": [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]
    }]);
  });

  it('Should filter recipes by search regardless of letter case with multiple words', function(){
    const filteredRecipes = filterByName(recipes, 'cOoKiE CuPs')

    expect(filteredRecipes).to.deep.equal([
      {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    }]);
  });

  it('Should return a message if no recipes match the search', function(){
      const filteredRecipes = filterByName(recipes, 'gabblygookblahblahblah')

      expect(filteredRecipes).to.equal("Sorry, No Recipes Were Found!")
  });
});

describe('Get recipe instructions', function(){
    
  let recipes;
  beforeEach(() => {
    return recipes = mockRecipeData
  });
  
  it('Should return recipe instructions based on recipe name', () => {

    const instructions = getInstructions(recipes, "AMbrOSia CupCAkeS")

    expect(instructions).to.deep.equal({
      '1': 'To make the Cupcakes: Preheat oven to 350 degrees. Line 12 cupcake tins with paper holders.',
      '2': 'Whisk together dry Fruit Cocktail Cupcakes ingredients.',
      '3': 'Add in wet Fruit Cocktail Cupcakes ingredients and stir with a rubber spatula until thoroughly combined. Fill cupcake tins evenly, and bake for 20 minutes or until thin knife inserted in center comes out clean.'
    });
  });

  it('Should return a message if no recipe is found by the given name', () => {

    const instructions1 = getInstructions(recipes, "Rocky Mountian Oysters")

    expect(instructions1).to.equal("Sorry, No Recipes Were Found!")
  });
});

describe('ingredients functions', () => {
  it('should return an array of ingredients needed for a recipe', () => {
    const recipes = mockRecipeData;
    const ingredients = mockIngredientsData;

    const ingredientsByRecipe = listIngredients(recipes, ingredients, 'Loaded Chocolate Chip Pudding Cookie Cups');
    

    expect(ingredientsByRecipe).to.deep.equal([
      'wheat flour',
      'bicarbonate of soda',
      'eggs',
      'sucrose',
      'instant vanilla pudding',
      'brown sugar',
      'salt',
      'fine sea salt',
      'semi sweet chips',
      'unsalted butter',
      'vanilla'
    ]);
  });
});

describe('Calculate cost Function', function(){
  it('should calculate the total cost in dollars given a recipe',function(){
    const recipe = mockRecipeData[0]
    const ingredientInfo = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      },
      {
        "id": 19335,
        "name": "sucrose",
        "estimatedCostInCents": 902
      },
      {
        "id": 19206,
        "name": "instant vanilla pudding",
        "estimatedCostInCents": 660
      },
      {
        "id": 19334,
        "name": "brown sugar",
        "estimatedCostInCents": 559
      },
      {
        "id": 2047,
        "name": "salt",
        "estimatedCostInCents": 280
      },
      {
        "id": 1012047,
        "name": "fine sea salt",
        "estimatedCostInCents": 528
      },
      {
        "id": 10019903,
        "name": "semi sweet chips",
        "estimatedCostInCents": 253
      },
      {
        "id": 1145,
        "name": "unsalted butter",
        "estimatedCostInCents": 617
      },
      {
        "id": 2050,
        "name": "vanilla",
        "estimatedCostInCents": 926
      }]
    
    const totalCost = calcRecipeCost(ingredientInfo, recipe)
    expect(totalCost).to.equal('177.76')
  });
});
