import React, { useEffect } from 'react'
const fetch = require('node-fetch');

/*
***JSON DRINK OBJECT FORMAT***
obj.strDrink = {drink name};
obj.strInstructions = {instructions};
obj.strIngredient[num] = ingredient
obj.strMeasure[num] = corresponding measurement
*/

function DrinkInfo({ drinkObj }) {
  console.log(drinkObj);
  const drinkName = drinkObj.strDrink;
  const instructions = drinkObj.strInstructions;
  // Must combine strIngredient and strMeasure to populare ingredients array.
  // This is handled below in the while loop
  const ingredients = [];
  
  // ingredient key array
  let ingredientAndMeasureKeys = {
    strIngredient1: drinkObj.strMeasure1,
    strIngredient2: drinkObj.strMeasure2,
    strIngredient3: drinkObj.strMeasure3,
    strIngredient4: drinkObj.strMeasure4,
    strIngredient5: drinkObj.strMeasure5,
    strIngredient6: drinkObj.strMeasure6,
    strIngredient7: drinkObj.strMeasure7,
    strIngredient8: drinkObj.strMeasure8,
    strIngredient9: drinkObj.strMeasure9,
    strIngredient10: drinkObj.strMeasure10,
    strIngredient11: drinkObj.strMeasure11,
    strIngredient12: drinkObj.strMeasure12,
    strIngredient13: drinkObj.strMeasure13,
    strIngredient14: drinkObj.strMeasure14,
    strIngredient15: drinkObj.strMeasure15,
  };

  // create a numerical variable of the current strIngredient
  // let num = 1;

  // while there are still ingredients to be read
  for (let key in ingredientAndMeasureKeys) {
    console.log('for loop entered...');
    // create an array of ingredients and their measurements if applicable
    const ingredient = drinkObj[key];
    if (ingredient === null) break;
    // the following line gets overwritten if there is no corresponding measurement
    let measurement = ': '
    // check if the current ingredient has a corresponding measurement
    // (drinkObj.strMeasure`${num}` !== null) ? measurement += drinkObj.strMeasure`${num}` : measurement = '';
    measurement += ingredientAndMeasureKeys[key];
    // push the completed string into the ingredients array
    ingredients.push(`${ingredient}${measurement}`)
  }

  return (
    <div className="drink-info" >
      <h1 id="name">
        {drinkName}
      </h1>
      <ul id="measured-ingredients">
        {ingredients.map((entry, index) => {
          return <li id="ingredient-bullet" key={index}>{entry}</li>
        })}
      </ul>
      <p id="instructions">
        {instructions}
      </p>
    </div>
  )
}

export default DrinkInfo
