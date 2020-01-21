import React, { Component, Fragment } from 'react';
import GameList from './GameList';


class GameContainer extends Component {

    state = {
        games: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/games")
        .then(res => res.json())
        .then(data => this.setState({games:data}))
    }


    render() {
        return(
            <Fragment>

                <GameList games={this.state.games} handleClick={this.props.handleClick}/>
                
            </Fragment>
        )
    }


}

export default GameContainer;