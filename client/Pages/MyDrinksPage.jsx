import React from 'react'
import MainContainer from '../Components/MainContainer.jsx';

// will need to use localstorage to keep track of userID
// make fetch request to get user's favs + recipes based on ID
// take the data returned from database and set equal to 2 variables:
const userFavs = [];
const userRecipes = [];
// a note for the server: we will need to make sure we're sending back 1 object with two keys, 
// each key will hold an array holding all the favorites and recipes

function MyDrinksPage() {
  return (
    <div>
      <MainContainer left='favorites' right='recipes' userFavs={userFavs} userRecipes={userRecipes} />
    </div>
  )
}

export default MyDrinksPage;
