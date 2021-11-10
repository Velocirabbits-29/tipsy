import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { enableFetchMocks, fetchMock } from 'jest-fetch-mock';

import SearchForm from '../client/Components/SearchForm';
import RecipeForm from '../client/Components/RecipeForm';
import DrinkInfo from '../client/Components/DrinkInfo';
import LoginForm from '../client/Components/LoginForm';
import { MemoryRouter, Route } from 'react-router';

describe('components render correctly', () => {
  test('DrinkInfo loads correct content', () => {
    const drinkObj = {
      strDrink: 'Old Fashioned',
      strInstructions:
        'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.',
      strIngredient1: 'Bourbon',
      strIngredient2: 'Angostura bitters',
      strIngredient3: 'Sugar',
      strIngredient4: 'Water',
      strIngredient5: null,
      strIngredient6: null,
      strIngredient7: null,
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strMeasure1: '4.5 cL',
      strMeasure2: '2 dashes',
      strMeasure3: '1 cube',
      strMeasure4: 'dash',
      strMeasure5: null,
      strMeasure6: null,
      strMeasure7: null,
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      strImageSource:
        'https://www.thecocktaildb.com/drink/11001-Old-Fashioned-Cocktail',
      thumbnailFilename: '11001_old_fashioned.jpg',
    };
    enableFetchMocks();
    const { getByText } = render(<DrinkInfo drinkObj={drinkObj} />);
    getByText('Old Fashioned');
    getByText((content, element) => content.startsWith('Place sugar cube'));
    getByText((content, element) => content.startsWith('Bourbon'));
    getByText((content, element) => content.startsWith('Water'));
  });

  test('LoginForm loads correct content', () => {
    const { getByText } = render(<LoginForm />, {wrapper: MemoryRouter})
    expect(screen.getByText('Username')).toBeInTheDocument();
  })

  test('RecipeForm loads correct content', () => {
    const { getByText, getByDisplayValue } = render(<RecipeForm />);
    getByText('Name of Cocktail');
    getByText('Ingredients');
    getByText('Instructions');
    getByDisplayValue('Submit');
  });

  test('SearchForm loads correct content', () => {
    const { getByText, getByDisplayValue } = render(<SearchForm />);
    getByText('So what are we working with?');
    getByText('I want to...');
    getByDisplayValue('Select a mood');
    getByText('Submit');
  });
});

describe('components route correctly', () => {
  test('LoginForm routes correctly', () => {
    act(() => {
    const handleLogin = jest.fn();
    const { getByText } = render(<LoginForm />, {wrapper: MemoryRouter});
      fireEvent.click(getByText('Log in'))})
    expect(handleLogin).toHaveBeenCalled();
  })
})