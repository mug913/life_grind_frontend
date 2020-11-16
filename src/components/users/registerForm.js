import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser} from '../../actions/userActions'
import { withRouter } from 'react-router-dom'

class RegisterForm extends Component {
state = {userdata: {
        username: '',
        password_digest: '',
        vpassword: '',
        email: '',
        },
        redirect: '/home'
    };

handleChange = (field, event) => {
    this.setState({userdata: {
        ...this.state.userdata,
        [field]: event.target.value
    }});
 };

handleSubmit = (event) => {
    event.preventDefault()
     if (this.state.userdata.password_digest === this.state.userdata.vpassword) {
       this.props.addUser(this.state.userdata)
       this.props.history.push(`${this.state.redirect}`)
    }
}

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>>
                    <label>Create User:</label>
                    <label>Username:</label>
                        <input type="text" onChange={this.handleChange.bind(this, 'username')} value={this.state.userdata.username}/>
                    <label>Password:</label>
                        <input type="password" onChange={this.handleChange.bind(this, 'password_digest')} value={this.state.userdata.password_digest}/>
                    <label>Verify Password:</label>
                        <input type="password" onChange={this.handleChange.bind(this, 'vpassword')} value={this.state.userdata.vpassword}/>
                    <label>Email:</label>
                        <input type="text" onChange={this.handleChange.bind(this, 'email')} value={this.state.userdata.email}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null,{addUser})(RegisterForm));
