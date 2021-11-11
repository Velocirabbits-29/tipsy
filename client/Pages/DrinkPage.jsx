import React from 'react'
import MainContainer from '../Components/MainContainer.jsx';

function DrinkPage(props) {
  const { drinkObj, currentUser } = props.location.state; 
  console.log('Drink page props: ', props)
  console.log('DrinkPage: ', props.currentUser);
  // if drinkObj is empty, make get request to API using the drink name 

  return (
    <div>
      <MainContainer left='drinkImage' drinkObj={drinkObj} currentUser={currentUser} right='drinkInfo' />
    </div>
  )
}

export default DrinkPage;