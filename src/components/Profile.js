import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import GameItem from "./GameItem"
import '../GameList.css'


class Profile extends Component {


    state = {
        user: {},
        wishlist: [],
        library: []
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
                console.log(data)
                this.setState({ user: data.user, wishlist: data.wishlist, library: data.library })
            })
    }

    render() {
        return (



            <div>
                <div className="profile">
                    <Card>
                        <Image src='profilepic.jpg' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{this.state.user.name}'s Profile</Card.Header>
                            <Card.Description>
                                {this.state.user.bio}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>

                        </Card.Content>
                    </Card>
                </div>

                <br />

                <div>

                    <div>
                        <Header as='h3' textAlign='center'>
                            {this.state.user.name}'s Library:
                        </Header>
                        <ul className="profile-pics">
                            {this.state.library.map((game) => {
                                return (
                                    <GameItem gameId={game.id} image={game.image} />
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <Header as='h3' textAlign='center'>
                            {this.state.user.name}'s Wishlist:
                        </Header>
                        <ul className="profile-pics">
                            {this.state.wishlist.map((game) => {
                                return (
                                    <GameItem gameId={game.id} image={game.image} />
                                )
                            })}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}

export default Profile;