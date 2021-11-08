import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSearchForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function SearchForm() {
  const [ ingredients, setIngredients ] = useState();
  const [ mood, setMood ] = useState('');

  const moodList= [
    'Be basic',
    'Feel fancy',
    'Party',
    'Be experimental',
    'Find something casual',
    'I don\'t know surprise me',
  ];

  // const makeArray = (string) => {
  //   let array = string.split(',');
  //   array.forEach(elem => {
  //     elem = elem.trim();
  //   })
  //   return array;
  // }

  const moods = moodList.map((elem, index) => {
    return <option value={elem} key={index.toString()}>{ elem }</option>
  }); 

  const handleSubmit = () => {
    // const ingredientList = makeArray(ingredients);
    const body = {
      ingredients
    }
    // after fetch request, returns an array holding recipe objs
    // loop through the array, finding the first obj that matches the mood
    // <Link> to Drink Page, passing in that obj ^ (drinkObj)
  }

  return (
    <div>
      <StyledSearchForm>
        <h1>So what are we working with?</h1>
        <input type='text' value={ingredients} 
          onChange={e => setIngredients(e.target.value)} 
          placeholder='Ingredients...'  
        />
        <h1>I want to...</h1>
        <select id="moodList">
          { moods }
        </select>
        <input type='submit' value='Submit' onSubmit={handleSubmit} />
      </StyledSearchForm>
    </div>
  )
}

export default SearchForm
