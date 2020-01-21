import React, { Component } from 'react';

class SelectedGame extends Component  {

    state = {
        selectedGame: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/games/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({selectedGame:data}))
    }
  
    render(){
        return (
            <div>
                <h2>You have selected a game {this.props.match.params.id}</h2>

                <h1> {this.state.selectedGame.name} </h1>
                <img src={this.state.selectedGame.image} alt=" " width= "350" height = "450"/> <br />
                <b><em> {this.state.selectedGame.description} </em></b>

                <br />
                <button type="button"> Add a Review </button>
                <br/>
                <button type="button"> Add To Library </button>
                <br/>
                <button type="button"> Add To Wishlist </button>

            </div>
        );
    }
}

export default SelectedGame;