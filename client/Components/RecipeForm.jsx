
import React, { useState } from 'react';
import styled from 'styled-components';
import  { useHistory } from 'react-router-dom';

function RecipeForm(props) {
  let history = useHistory();
  const [ name, setName ] = useState('');
  const [ ingredients, setIngredients ] = useState('');
  const [ instructions, setInstructions ] = useState('');
  const [ mood, setMood ] = useState('');

const StyledSearchForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`
  // function that converts string to array
  const parseIngredients = (string) => {
    let array = string.split(',');
    let ingredientArray = [];
    let measurementArray = [];
    array.forEach(elem => {
      const colon = elem.indexOf(':');
      ingredientArray.push(elem.slice(0, colon).trim());
      measurementArray.push(elem.slice(colon + 1).trim())
    })
    return {ingredients: ingredientArray, measurements: measurementArray};
  }

  const moodList= {
    'Select a mood': 'Placeholder',
    'When I\'m feeling basic': "Ordinary Drink",
    'When I\'m feeling fancy': "Cocktail",
    'When I want to party': "Punch / Party Drink",
    'When I want to be experimental': "Shot",
    'When I want something casual': "Cocktail",
  };

  // render all keys in the moodList object as options for the user to select
  const moods = Object.keys(moodList).map((elem, index) => {
    if (elem === 'Select a mood') {
      return <option id='select' value='' key={index.toString()} >{ elem }</option>
    }
    return <option id={`mood${index}`} value={elem} key={index.toString()} >{ elem }</option>
  }); 

  const assignMood = (e) => {
    console.log('assignMood invoked');
    console.log(e.target.value);
    setMood(moodList[e.target.value]);
  }

  // fetch to handle submit
  const handleSubmit = () => {
    const parsedIngredients = parseIngredients(ingredients);
    // const creator = currentUser.username;

    console.log(id);

    const body = {
      name,
      parsedIngredients,
      instructions,
      mood
    }

    history.push({
      pathname: '/mydrinks'
    })

    fetch(`/api/recipes/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(() => {
        setName('');
        setIngredients('');
        setInstructions('');
        history.push({
          pathname: '/mydrinks'
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <StyledSearchForm>
        <h2>Name of Cocktail</h2>
        <input placeholder='(E.g., Boulevardier)' type='text' value={name} onChange={e => setName(e.target.value)}/>
        <h2>Ingredients</h2>
        <p>Please separate ingredients by comma and specify the portion of each (seperated from ingredient name by a colon).</p>
        <input type="text" placeholder='(E.g., Bourbon: 1 1/4 oz, Campari: 1 oz, Sweet Vermouth: 1 oz, Orange twist' value={ingredients} onChange={e => setIngredients(e.target.value)}/>
        <h2>Instructions</h2>
        <input type='text' rows="4" placeholder='Add bourbon, Campari, and vermouth into a mixing glass; strain over fresh ice; garnish with orange twist.' value={instructions} onChange={e => setInstructions(e.target.value)}/>
        <h2>When do I crave this drink?</h2>
        <select id="moodList" onChange={assignMood} >
          { moods }
        </select>
        <div>
        <input type='submit' value='Submit' onClick={handleSubmit} />
        </div>
      </StyledSearchForm>
    </div>
  )
}

export default RecipeForm;

