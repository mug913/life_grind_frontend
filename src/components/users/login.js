import React, { Component } from 'react'

class LoginForm extends Component {
state = {
        text: '',
    };

handleChange = event => {
    this.setState({
        text: event.target.value
    });
};

    render() {
        return(
            <div>
                <form>
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

export default LoginForm;