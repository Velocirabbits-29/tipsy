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
  const drinkName = drinkObj.strDrink;
  const instructions = drinkObj.strInstructions;
  // Must combine strIngredient and strMeasure to populare ingredients array.
  // This is handled below in the while loop
  const ingredients = [];
    
  // create a numerical variable of the current strIngredient
  let num = 1;

  // while there are still ingredients to be read
  while (drinkObj.strIngredient`${num}` !== null) {
    // create an array of ingredients and their measurements if applicable
    const ingredient = drinkObj.strIngredient`${num}`;
    // the following line gets overwritten if there is no corresponding measurement
    let measurement = ': '
    // check if the current ingredient has a corresponding measurement
    (drinkObj.strMeasure`${num}` !== null) ? measurement += drinkObj.strMeasure`${num}` : measurement = '';
    // push the completed string into the ingredients array
    ingredients.push(`${ingredient}${measurement}`)
    num++;
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
