import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import '../GameList.css'

class SelectedGame extends Component {

    state = {
        selectedGame: [],
        message: ""
    }

    componentDidMount() {
        fetch(`http://localhost:3000/games/${this.props.match.params.id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ selectedGame: data }))
    }

    addToWishlist = () => {
        fetch( 'http://localhost:3000/wishlists/' , {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
        },
        body: JSON.stringify ({
            wishlist: {
                game_id: this.state.selectedGame.id
            }
        })
          })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert(data.message)
        
        })
    }

    addToLibrary = () => {
        fetch( 'http://localhost:3000/user_games/' , {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
        },
        body: JSON.stringify ({
            user_game: {
                game_id: this.state.selectedGame.id
            }
        })
          })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert(data.message)
        })
    }

    render() {
        return (
            <div className="single-game-container">
                <div className="card-container">
                    <Card>
                        <Image src={this.state.selectedGame.image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{this.state.selectedGame.name}</Card.Header>
                            <Card.Description>
                                {this.state.selectedGame.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button.Group>

                            <Button type="button" onClick={this.addToLibrary}> Add To Library  </Button>
                            <Button.Or />
                            <Button positive type="button" onClick={this.addToWishlist}> Add To Wishlist </Button>

                            </Button.Group>
                        </Card.Content>
                    </Card>
                </div>

            </div>
        );
    }
}

export default SelectedGame;