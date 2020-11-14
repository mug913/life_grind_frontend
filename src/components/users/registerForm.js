import React, { Component } from 'react'


class RegisterForm extends Component {
state = {
        username: '',
        password: '',
        vpassword: '',
        email: ''
    };

handleChange = event => {
    this.setState({
        username: event.target.value
    });
};

handleSubmit = event => {
    event.preventDefault()
    if (this.state.password === this.state.vpassword) {
        this.props.submitRegister(this.state)
        this.setState({
        username: ""
    })
  }
}

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>>
                    <label>Create User:</label>
                    <label>Username:</label>
                        <input type="text" onChange={this.handleChange} value={this.state.username}/>
                    <label>Password:</label>
                        <input type="password" onChange={this.handleChange} value={this.state.password}/>
                    <label>Verify Password:</label>
                        <input type="vpassword" onChange={this.handleChange} value={this.state.vpassword}/>
                    <label>Email:</label>
                        <input type="password" onChange={this.handleChange} value={this.state.email}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default RegisterForm;