import React, { useEffect, useState } from 'react'
import MainContainer from '../Components/MainContainer.jsx';
import MyList from '../Components/MyList.jsx';

// will need to use localstorage to keep track of userID
// make fetch request to get user's favs + recipes based on ID
// take the data returned from database and set equal to 2 variables:
const userFavs = [];
const userRecipes = [];
// a note for the server: we will need to make sure we're sending back 1 object with two keys, 
// each key will hold an array holding all the favorites and recipes

function MyDrinksPage(props) {
  // the above might not make it necessary to have the userId state below
  // const [ userId, setUserId ] = useState(0);
  const [ userFavs, setUserFavs ] = useState([]);
  const [ userRecipes, setUserRecipes ] = useState([]);

  // similar to ComponentDidMount
  useEffect(() => {
    // getting user Id from local storage
    const id = JSON.parse(localStorage.getItem('userId'));
    // setUserId(id);
    // console.log('userId', id)
    // '/faves/:id'
    // `/faves/${userId}`
    // FAVORITES
    fetch(`api/faves/${id}`) // this is req.params
      .then(response => response.json())
      .then(data => {
        // need to see how userfavs data is formatted in response
        console.log('user favs from server', data);
        setUserFavs(data);
      })

    // '/recipes/:id'
    // RECIPES
    fetch(`api/recipes/${id}`)
      .then(response => response.json())
      .then(data => {
        // need to see how userrecipes data is formatted in response
        console.log('FETCH user recipes from server', data);
        setUserRecipes(data);
      })
  }, []);
  console.log('RETURN')
  return (
    <div>
      <MainContainer left='favorites' right='recipes' userFavs={userFavs} userRecipes={userRecipes} />

      {/* <MyList title='My Favorite Recipes' userRecipes={userRecipes} /> */}
    </div>
  )
}

export default MyDrinksPage;
