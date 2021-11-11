import React from 'react'
import MainContainer from '../Components/MainContainer.jsx';

function DrinkPage(props) {
  const { drinkObj } = props.location.state; 
  console.log('DrinkPage: ', drinkObj);
  // if drinkObj is empty, make get request to API using the drink name 

  return (
    <div>
      <MainContainer left='drinkImage' drinkObj={drinkObj} right='drinkInfo' currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} userVerified={props.userVerified} setUserVerified={props.setUserVerified}/>
    </div>
  )
}

export default DrinkPage;