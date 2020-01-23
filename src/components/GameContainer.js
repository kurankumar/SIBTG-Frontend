import React, { Component, Fragment } from 'react';
import GameList from './GameList';
import '../GameList.css'


class GameContainer extends Component {

    state = {
        games: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/games", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ games: data }))
    }


    render() {
        return (
            <Fragment>
                <div className="container">
                    <GameList games={this.state.games} handleClick={this.props.handleClick} />
                </div>

            </Fragment>
        )
    }


}

export default GameContainer;