import React from 'react'
import MainContainer from '../Components/MainContainer.jsx';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <MainContainer left='image' right='homepage'/>
      <Link to={{
        pathname: `/addrecipe`
      }}>Click here</Link>
    </div>
  )
}

export default App;

