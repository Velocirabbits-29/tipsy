import React from 'react';
import MainContainer from '../Components/MainContainer.jsx';

function LoginPage({
  currentUser,
  setCurrentUser,
  userVerified,
  setUserVerified,
} = props) {
  return (
    <div>
      <MainContainer
        left="image"
        right="login"
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        userVerified={userVerified}
        setUserVerified={setUserVerified}
      />
    </div>
  );
}

export default LoginPage;
