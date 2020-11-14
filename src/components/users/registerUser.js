import React, { Component } from 'react'


class RegisterUser extends Component {
state = {
        username: '',
        password: '',
        email: ''
    };

handleChange = event => {
    this.setState({
        username: event.target.value
    });
};

handleSubmit = event => {
    event.preventDefault()
    this.props.submitLogin(this.state.username)
    this.setState({
        username: ""
    })
  }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>>
                    <label>Login</label>
                        <input type="text" onChange={this.handleChange} value={this.state.username}/>
                    <label>Password</label>
                        <input type="password" onChange={this.handleChange} value={this.state.password}/>
                        <input type="submit" />
                   <button >Register</button>
                </form>
            </div>
        )
    }
}

export default LoginInput;