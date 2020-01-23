import React, { Component } from 'react';
import { Card, Image, Menu, Icon } from 'semantic-ui-react'
import { NavLink, Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div className="profile">
                <Card>
                    <Image src='profilepic.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Made By Kuran Kumar</Card.Header>
                        <Card.Description>
                            This project was made using:
                            <li> Ruby on Rails - Backend </li>
                            <li> Javascript and React - Frontend </li>
                            <li> GiantBomb - API </li>
                            <li> JWT Auth - Login and Token </li>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>


                        <Menu.Item>
                            <Icon name='user' />
                            <a href="https://github.com/kurankumar">My Github</a>

                        </Menu.Item>
                        <br />
                        <Menu.Item>
                            <Icon name='user' />
                            <a href="https://www.linkedin.com/in/kuran-kumar-268a28a2/">My Linkdin</a>
                        </Menu.Item>

                    </Card.Content>
                </Card>
            </div>

        )
    }
}



export default About;