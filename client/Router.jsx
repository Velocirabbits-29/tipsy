import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './Pages/App.jsx';
import RecipePage from './Pages/RecipePage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import DrinkPage from './Pages/DrinkPage.jsx';
import MyDrinksPage from './Pages/MyDrinksPage.jsx';

const Router = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [userVerified, setUserVerified] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App currentUser={currentUser} setCurrentUser={setCurrentUser} userVerified={userVerified} setUserVerified={setUserVerified} />
          </Route>
          <Route path="/drink">
            <DrinkPage currentUser={currentUser} setCurrentUser={setCurrentUser} userVerified={userVerified} setUserVerified={setUserVerified} />
          </Route>
          <Route path="/addrecipe">
            <RecipePage currentUser={currentUser} setCurrentUser={setCurrentUser} userVerified={userVerified} setUserVerified={setUserVerified} />
          </Route>
          <Route path="/login">
            <LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} userVerified={userVerified} setUserVerified={setUserVerified} />
          </Route>
          <Route path="/signup">
            <SignupPage currentUser={currentUser} setCurrentUser={setCurrentUser} userVerified={userVerified} setUserVerified={setUserVerified} />
          </Route>
          <Route path="/mydrinks">
            <MyDrinksPage currentUser={currentUser} setCurrentUser={setCurrentUser} userVerified={userVerified} setUserVerified={setUserVerified} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
