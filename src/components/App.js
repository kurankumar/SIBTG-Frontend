import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header';
import GameContainer from './GameContainer'
import SelectedGame from './SelectedGame';
import '../App.css';

class App extends Component {


  handleClick = (gameId) => {
    console.log(gameId)
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header />

          <Switch>
            <Route exact path="/"> 
              <GameContainer handleClick={this.handleClick}/>
            </Route>

            <Route path="/games/:id"  render={props => (<SelectedGame handleClick={this.handleClick} {...props}/>)}  />
                      
    
          </Switch>
        </Router>        
      </div>
    );
  }
}

export default App;
