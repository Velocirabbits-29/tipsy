import React from 'react';
import MainContainer from '../Components/MainContainer.jsx';
import '../styles.scss';

function App(props) {

  return (
    <div>
      <MainContainer left='image' right='homepage' currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />
    </div>
  )
}

export default App;

