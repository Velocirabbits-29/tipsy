import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div>
      <div>
        <form
          onChange={(event) => console.log(event.target.value)}>
          <h2>Username</h2>
          <input 
            id="login-username"
            type="text"
            placeholder="login username placeholder..."
          /> 
          </form>
          <form onChange={(event) => console.log(event.target.value)}>
          <h2>Password</h2>
          <input 
            id="login-password"
            type="text"
            placeholder="login password placeholder..."
          />
          <button
            type="submit">
              Log In</button>
        </form>
      </div>
      <div>
        {/* <p>Don't have an account?</p> <Link to={
          { pathname: '/signup' }
        }>Sign Up</Link> */}
      </div>
    </div>

  )
}

export default LoginForm;
