import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const db = require('../../server/models/userModels')


function DrinkInfo({ drinkObj }) {
  const id = localStorage.getItem('userId');
  const [fav, setFav] = useState(false);
  // check if DrinkName is in favorites table
  // useEffect(() => {
  //   fetch(`/api/faves/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       for (let elem of data) {
  //         if (elem == drinkObj.strDrink) setFav(true);
  //       }
  //     })
  // }, []);
  console.log('DRINKOBJ: ', drinkObj);
  const drinkName = drinkObj.strdrink;
  const instructions = drinkObj.strinstructions;
  // Must combine strIngredient and strMeasure to popular ingredients array.
  // This is handled below in the while loop
  const ingredients = [];
  
  // ingredient key array
  let ingredientAndMeasureKeys = {
    stringredient1: drinkObj.strmeasure1,
    stringredient2: drinkObj.strmeasure2,
    stringredient3: drinkObj.strmeasure3,
    stringredient4: drinkObj.strmeasure4,
    stringredient5: drinkObj.strmeasure5,
    stringredient6: drinkObj.strmeasure6,
    stringredient7: drinkObj.strmeasure7,
    stringredient8: drinkObj.strmeasure8,
    stringredient9: drinkObj.strmeasure9,
    stringredient10: drinkObj.strmeasure10,
    stringredient11: drinkObj.strmeasure11,
    stringredient12: drinkObj.strmeasure12,
    stringredient13: drinkObj.strmeasure13,
    stringredient14: drinkObj.strmeasure14,
    stringredient15: drinkObj.strmeasure15,
  };

  // if there were no matching drinks in database, just show the suggestion 
  if (drinkObj.suggestion) {
    ingredients.push(drinkObj.suggestion);
  } else {
    // while there are still ingredients to be read
    for (let key in ingredientAndMeasureKeys) {
      console.log('for loop entered...');
      // create an array of ingredients and their measurements if applicable
      const ingredient = drinkObj[key];
      if (ingredient === null) break;
      // the following line gets overwritten if there is no corresponding measurement
      let measurement = ':     ';
      // check if the current ingredient has a corresponding measurement
      // (drinkObj.strMeasure`${num}` !== null) ? measurement += drinkObj.strMeasure`${num}` : measurement = '';
      measurement += ingredientAndMeasureKeys[key];
      // push the completed string into the ingredients array
      ingredients.push(`${ingredient}${measurement}`)
    }
  }

  const handleClick = async () => {
    if (fav == true) {
      // delete from favs table
      const idDrink = drinkObj.iddrink;
      const username = '';
      let myQuery = 'DELETE FROM favorites WHERE'
      myQuery += `idDrink=${idDrink} AND username=${username}`;
      try {
        let data = await db.query(myQuery);
        console.log('SUCCESS DELETING FROM FAVS TABLE!')
      } catch(err) {
        console.log(err);
      }
      setFav(false);

    } else {
      // get unique Id for second db query with favid
      try {
        let maxId = await db.query('SELECT max(faveid) FROM favorites');
        console.log('maxid', maxId);
        maxId++;
        console.log('maxid', maxId);
      } catch (err) {
        console.log(err);
      }
      // add to favorites table
      let myQuery = 'INSERT INTO favorites (favid, iddrink, username)';
      myQuery += ' VALUES (maxId, , )'
      try {
        let data = await db.query(myQuery);
        console.log('SUCCESS ADDING TO FAVS TABLE!')
      } catch (err) {
        console.log(err);
      }
      //fetch();
      setFav(true);
    }
  }

  let heartIcon = (fav == true) ? <AiFillHeart onClick={handleClick} /> : <AiOutlineHeart onClick={handleClick} />;

  return (
    <div className="drink-info" >
      <h1 id="name">
        { drinkName }
        { heartIcon }
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
