
import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'

function RecipeForm() {
  const [ name, setName ] = useState('');
  const [ ingredients, setIngredients ] = useState('');
  const [ instructions, setInstructions ] = useState('');

  // function that converts string to array
  // const makeArray = (string) => {
  //   let array = string.split(',');
  //   array.forEach(elem => {
  //     elem = elem.trim();
  //   })
  //   return array;
  // }

  // fetch to handle submit
  const handleSubmit = () => {
    // const ingredientList = makeArray(ingredients);
    const id = JSON.parse(localStorage.getItem('userId'));

    const body = {
      name,
      ingredients,
      instructions
    }

    fetch(`/addrecipe/${id}`, {
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
        <Redirect to={{
          pathname: "/mydrinks",
        }} />
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <form>
        <h2>Name of Cocktail</h2>
        <input class='addrecipe' type='text' value={name} onChange={e => setName(e.target.value)}/>
        <h2>Ingredients</h2>
        <p>Please make sure to separate each ingredient with a comma.</p>
        <input type="text" class='addrecipe' value={ingredients} onChange={e => setIngredients(e.target.value)}/>
        <h2>Instructions</h2>
        <textarea class='recipeinstructions' type='text' value={instructions} onChange={e => setInstructions(e.target.value)}/>
        <div>
        <input type='submit' value='Submit' onSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  )
}

export default RecipeForm;

