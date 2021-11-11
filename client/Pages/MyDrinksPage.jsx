import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import MainContainer from '../Components/MainContainer.jsx';

function MyDrinksPage({ currentUser, setCurrentUser } = props) {
  // the above might not make it necessary to have the userId state below
  // const [ userId, setUserId ] = useState(0);
  const [ userFavs, setUserFavs ] = useState([]);
  const [ userRecipes, setUserRecipes ] = useState([]);

  useEffect(() => {
    // fetch(`/api/faves/${id}`) // this is req.params
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('user favs from server', data);
    //     setUserFavs(data);
    //   })

    // fetch(`/api/recipes/${id}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('FETCH user recipes from server', data);
    //     setUserRecipes(data);
    //   })
    setUserFavs(currentUser.faves);
  }, []);
  console.log('RETURN')
  return (
    <div>
      <MainContainer left='favorites' right='recipes' userFavs={userFavs} userRecipes={userRecipes} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  )
}

export default MyDrinksPage;
