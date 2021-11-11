import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import MainContainer from '../Components/MainContainer.jsx';

function MyDrinksPage({ currentUser, setCurrentUser } = props) {
  // the above might not make it necessary to have the userId state below
  // const [ userId, setUserId ] = useState(0);
  const [ userFavs, setUserFavs ] = useState([]);
  const [ userRecipes, setUserRecipes ] = useState([]);

  useEffect(() => {
    setUserFavs(currentUser.faves);
  }, []);
  
  // useEffect(() => {
  //   fetch('/api/getuserinfo', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json"},
  //     body: JSON.stringify(currentUser.username)
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     const { faves } = data;
  //     setUserFavs(faves);
  //   })
  // }, [currentUser])

  // console.log('RETURN')
  return (
    <div>
      <MainContainer left='favorites' right='recipes' userFavs={userFavs} userRecipes={userRecipes} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  )
}

export default MyDrinksPage;

    // fetch('/api/getuserinfo', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json"},
    //   body: JSON.stringify(currentUser.username)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   const { faves } = data;
    //   setUserFavs(faves);
    // })