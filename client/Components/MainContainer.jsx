import React from 'react'
import Photo from '../Assets/MainPhoto.jpeg';
import styled from 'styled-components';
import MyList from '../Components/MyList.jsx';
import SearchForm from '../Components/SearchForm.jsx';
import DrinkInfo from './DrinkInfo.jsx';

function MainContainer(props) {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `

  const { left, right, drinkObj } = props;

  const Image = styled.img`
    border-radius: 300px 300px 0 0;
    width: 40vw;
  `
  // Logic for switching which components will render on the left
  // Image or My Favorite Drinks
  let Left;
  switch (left) {
    case 'image':
      Left = <Image src={Photo} />
      break;
    case 'drinkImage':
      Left = <Image src={drinkObj.strDrinkThumb} /> // do i need to use 'require'?
      break;
  }

  // Logic for switching which components will render on the right
  let Right;
  switch (right) {
    case 'homepage':
      Right = <SearchForm />
      break;
    case 'drink':
      Right = <DrinkInfo title='My Favorite Drinks' drinkObj={drinkObj}/>
      break;
  };


  return (
    <Wrapper id='main-container'>
      {/* Left Side */}
      <div>
        { Left }
      </div>

      {/* Right Side */}
      <div>
        { Right }
      </div>
    </Wrapper>
  )
}

export default MainContainer
