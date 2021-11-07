import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // login is a post request
  const handleLogin = ((username, password) => {
    console.log(JSON.stringify({ username, password }));

    // fetch is built into the browser
    fetch('/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    }).then((data) => {
      console.log('logged in')
      // get userId in response
      // need to double check format of data that is sent here

      // set userId in local storage to persist through application
      localStorage.setItem('userId', 'jennifer123');
    })
  })

  return (
    <div>
      <div>
        <h2>Username</h2>
        <form>
          <input
            id="login-username"
            type="text"
            // placeholder="login username placeholder..."
            onChange={(event) => setUsername(event.target.value)}
          />
        </form>
        <h2>Password</h2>
        <form>
          <input
            id="login-password"
            type="text"
            // placeholder="login password placeholder..."
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
      </div>
      <div>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            return handleLogin(username, password)
          }}>
          Log in
        </button>
      </div>
      <div>
        <p>Don't have an account?</p>
        <Link to={
          { pathname: '/signup' }
        }>Sign up</Link>
      </div>
    </div>
  )
}

export default LoginForm;
