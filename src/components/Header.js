import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react'

const GameHeader = () => {
  return (
    <Header size='huge'>Should I Buy This Game?
      <Menu>
          
        <Menu.Item
          name='games'
          as={NavLink}
          to="/games"
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='about'
          as={NavLink}
          to="/about"
        >
          About
        </Menu.Item>

        <Menu.Item
          name='suggest'
          as={NavLink}
          to="/suggest"
        >
          Suggest A Game
        </Menu.Item>

        <Menu.Item
          name='signup'
          as={NavLink}
          to="/"
        >
          Sign Up
        </Menu.Item>

        <Menu.Item
          name='login'
          as={NavLink}
          to="/login"
        >
          Login
        </Menu.Item>

        <Menu.Item
          name='profile'
          as={NavLink}
          to="/profile"
        >
          My Profile
        </Menu.Item>
        
      </Menu>
    </Header>
  );
}

export default GameHeader;