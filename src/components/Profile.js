import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import GameItem from "./GameItem"


class Profile extends Component {


    state = {
        user: {},
        wishlist: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/profile/', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ user: data.user, wishlist: data.wishlist })
            })
    }

    render() {
        return (

            <Card>
                <Image src='profilepic.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.state.user.name}'s Profile</Card.Header>
                    <Card.Description>
                        {this.state.user.bio}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='gamepad' />
                    {this.state.wishlist.length} Game(s) on Wishlist
                        {this.state.wishlist.map((game) =>
                        <GameItem
                            key={game.id}
                            gameId={game.id}
                            image={game.image}
                            
                        />)}
                </Card.Content>
            </Card>
        )
    }
}

export default Profile;