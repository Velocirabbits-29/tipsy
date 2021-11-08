import React, { useEffect } from 'react'
import MainContainer from '../Components/MainContainer.jsx';

// will need to use localstorage to keep track of userID
// make fetch request to get user's favs + recipes based on ID
// take the data returned from database and set equal to 2 variables:
const userFavs = [];
const userRecipes = [];
// a note for the server: we will need to make sure we're sending back 1 object with two keys, 
// each key will hold an array holding all the favorites and recipes

function MyDrinksPage(props) {
  // ID passed in through Router Redirect
  const { id } = props.location.state;
  
  const [ userId, setUserId ] = useState('');
  const [ userFavs, setUserFavs ] = useState([]);
  const [ userRecipes, setUserRecipes ] = useState([]);

  // similar to ComponentDidMount
  useEffect(() => {
    // getting user Id from local storage
    setUserId(JSON.parse(localStorage.getItem('userId')));

    fetch('/placeholderforUserFavs')
      .then(response => response.json())
      .then(data => {
        // need to see how userfavs data is formatted in response
        console.log('user favs from server', data);
        setUserFavs(data);
      })
    
    fetch('/placeholderforUserRecipes')
      .then(response => response.json())
      .then(data => {
        // need to see how userrecipes data is formatted in response
        console.log('user recipes from server', data);
        setUserRecipes(data);
      })
  }, []);

  return (
    <div>
      <MainContainer left='favorites' right='recipes' userFavs={userFavs} userRecipes={userRecipes} />
    </div>
  )
}

export default MyDrinksPage;