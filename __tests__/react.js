import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import SearchForm from '../client/Components/SearchForm';
// import Photo from '../client/Assets/MainPhoto.jpeg';
// import styled from 'styled-components';
// import MyList from '../client/Components/MyList.jsx';
// import SearchForm from '../client/Components/SearchForm.jsx';
// import DrinkInfo from '..client/Components/DrinkInfo.jsx';
// import SignupForm from '../client/Components/SignupForm';
// import LoginForm from '../client/Components/LoginForm'
// import RecipeForm from '../client/Components/RecipeForm.jsx';
// import Navigation from '../client/Components/Navigation.jsx';

describe('SearchForm', () => {

  beforeAll(() => {
  })
  
  it('loads component', () => {
    screen.debug();
  });
  
  it('displays correct text', () => {
    const component = render(<SearchForm />);
    component.getByText('So what are we working with?');
  })
});