import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  width: 100vw;
  height: 10%;
  border-bottom: 1px #6F9283 solid;
`

const NavLink = styled(Link)`
  font-weight: 300;
  margin: 0 150px;
  text-decoration: none;
  color: #6F9283;
`
const CircleNavLink = styled(NavLink)`
  font-size: .75em;
`

const Logo = styled.h1`
  font-weight: 500;
  color: #6F9283;
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 150px;
  border: 1px solid #6F9283;
  border-radius: 50%;
  height: 70px;
  width: 70px;
`

// check if user is logged in and conditionally render login or logout
const loginOrOut = 'LOGIN';

function Navigation() {
  return (
    <NavContainer id='navigation'>
      <NavLink to={{
        pathname: `/`
      }}>Home</NavLink>

      <NavLink to={{
        pathname: `/addrecipe`
      }}>Add Recipe</NavLink>

      <Logo>Tipsy</Logo>

      <NavLink to={{
        pathname: `/mydrinks`
      }}>My Drinks</NavLink>

      <Circle>
        <CircleNavLink to={{
          pathname: `/login`
        }}>{ loginOrOut }</CircleNavLink>
      </Circle>
      
    </NavContainer>
  )
}

export default Navigation
