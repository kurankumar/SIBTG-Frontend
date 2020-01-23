import React, { Component } from 'react';

class Login extends Component {
    state = {
      name: "",
      password: "",
      message: ""
    }
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault()

      const { name, password } = this.state

      fetch( "http://localhost:3000/login" , {
      method: 'POST', 
      headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json"         
      },
      body: JSON.stringify ({

        user: { 
            name,
            password        
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
          <h1>Login</h1>
  
          <label>Username</label>
          <input
            name='name'
            placeholder='Username'
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
  
          <input value="Login" type='submit'/>
        </form>
      )
    }
  }



export default Login;