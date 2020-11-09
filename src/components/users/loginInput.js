import React, { Component } from 'react'

class LoginInput extends Component {
state = {
        username: '',
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
                        <input type="text" onChange={this.handleChange} value={this.state.username} />
                        <input type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginInput;