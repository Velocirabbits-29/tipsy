import React from 'react';
import MainContainer from '../Components/MainContainer.jsx';

function RecipePage(props) {
  return (
    <div>
      <MainContainer left='image' right='addRecipe' currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} userVerified={props.userVerified} setUserVerified={props.setUserVerified}/>
    </div>
  )
}

export default RecipePage;