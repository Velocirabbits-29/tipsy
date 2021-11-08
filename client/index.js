import React from 'react';
import { render } from 'react-dom';
import Router from './Router.jsx';
import App from './Pages/App.jsx';

render(
  <Router/>,
  // <App/>,
  document.getElementById('app')
);