import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'


class Signup extends Component {
    state = {
        name: "",
        password: "",
        bio: "",
        message: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, password, bio } = this.state

        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({

                user: {
                    name,
                    password,
                    bio
                }


            })
        })
            .then(res => res.json())
            .then(({ user = {}, jwt = '', message }) => {
                if (message === "success") {
                    localStorage.setItem("jwt", jwt)
                    this.props.history.push("/games")
                } else {
                    this.setState({ message })
                }
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                <label>Username</label>
                <input
                    name='name'
                    placeholder='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                /><br />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                /><br />
                </Form.Field>
                <Form.Field>
                <label>Bio</label>
                <textarea
                    name='bio'
                    placeholder='Bio'
                    value={this.state.bio}
                    onChange={this.handleChange}
                /><br />
                </Form.Field>
                <Button type='submit'>Login</Button>
            </Form>

        

      )
    }
}

export default Signup;
