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

handleSubmit = (event) => {
    event.preventDefault()
    this.props.sumbmitlogIn(this.state.username)
  }

    render() {
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>>
                    <p>
                        <label>Login</label>
                        <input type="text" onChange={this.handleChange} value={this.state.text} />
                    </p>
                        <imput type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginInput;