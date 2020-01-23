import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Button } from 'semantic-ui-react'

import GameHeader from './Header';
import GameContainer from './GameContainer'
import SelectedGame from './SelectedGame';
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile"
import About from "./About"
import '../App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Router>
          <GameHeader />

          <Switch>
            <Route exact path="/" component={Signup} />

            <Route path="/games/:id" render={props => (<SelectedGame {...props} />)} />

            <Route path="/games" component={GameContainer} />

            <Route path="/login" component={Login} />

            <Route path="/profile" component={Profile} />

            <Route path="/about" component={About} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
