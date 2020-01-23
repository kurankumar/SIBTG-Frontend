import React, { Component } from 'react';


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
      
      fetch( "http://localhost:3000/users" , {
      method: 'POST', 
      headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json"         
      },
      body: JSON.stringify ({

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
        this.setState({message})
      }
    })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up For An Account</h1>
  
          <label>Username</label>
          <input
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
            /><br/>
  
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>
  
            <label>Bio</label>
            <textarea
              name='bio'
              placeholder='Bio'
              value={this.state.bio}
              onChange={this.handleChange}
              /><br/>
  
          <input value="Sign Up" type='submit'/>
        </form>
      )
    }
  }

  export default Signup;
  