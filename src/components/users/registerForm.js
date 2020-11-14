import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser} from '../../actions/userActions'

class RegisterForm extends Component {
state = {
        username: '',
        password: '',
        vpassword: '',
        email: ''
    };

handleChange = (field, event) => {
    this.setState({
        [field]: event.target.value
    });
};

handleSubmit = event => {
    event.preventDefault()
    if (this.state.password === this.state.vpassword) {
        this.props.addUser(this.state)
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
                        <input type="text" onChange={this.handleChange.bind(this, 'username')} value={this.state.username}/>
                    <label>Password:</label>
                        <input type="password" onChange={this.handleChange.bind(this, 'password')} value={this.state.password}/>
                    <label>Verify Password:</label>
                        <input type="vpassword" onChange={this.handleChange.bind(this, 'vpassword')} value={this.state.vpassword}/>
                    <label>Email:</label>
                        <input type="text" onChange={this.handleChange.bind(this, 'email')} value={this.state.email}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null,{addUser})(RegisterForm);