import React, { Component } from 'react'


class LoginInput extends Component {
state = {
        username: '',
        password: ''
    };

handleChange = (field, event) => {
    console.log(field)
    console.log(event.target.value)
    console.log(this.state)
    this.setState({
        [field]: event.target.value
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
                        <input type="text" onChange={this.handleChange.bind(this, 'username')} value={this.state.username}/>
                    <label>Password</label>
                        <input type="password" onChange={this.handleChange.bind(this, 'password')} value={this.state.password}/>
                        <input type="submit" />
                   <button >Register</button>
                </form>
            </div>
        )
    }
}

export default LoginInput;