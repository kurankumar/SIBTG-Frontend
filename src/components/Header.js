import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <div>
      <h1>Should I Buy This Game?</h1>
    <NavLink to="/">Home</NavLink>

    <NavLink to="/about">About</NavLink>

    <NavLink to="/suggest">Suggest A Game</NavLink>

    </div>



  );
}

export default Header;