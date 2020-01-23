import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import { NavLink, Redirect } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react'

class GameHeader extends Component {

    state = {
        randNumb: Math.floor(Math.random() * 101) + 1
    }

    suggestGame = () => {
        let numb = Math.floor(Math.random() * 101) + 1
        this.setState({randNumb: numb})
        this.props.history.push(`/games/${numb}`)
    }


    render() {
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
                        onClick={this.suggestGame}
                        as={NavLink}
                        to={`/games/${this.state.randNumb}`}
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
}

export default withRouter(GameHeader);