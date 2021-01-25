import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser} from '../../actions/userActions'
import { withRouter } from 'react-router-dom'

class RegisterForm extends Component {
state = {userdata: {
        name: '',
        password: '',
        password_confirmation: '',
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
     if (this.state.userdata.password === this.state.userdata.password_confirmation) {
       this.props.addUser(this.state.userdata)
       this.props.history.push(`${this.state.redirect}`)
    }
}

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Create User:</label>
                    <label>Username:</label>
                        <input type="text" onChange={this.handleChange.bind(this, 'name')} value={this.state.userdata.name}/>
                    <label>Password:</label>
                        <input type="password" onChange={this.handleChange.bind(this, 'password')} value={this.state.userdata.password}/>
                    <label>Verify Password:</label>
                        <input type="password" onChange={this.handleChange.bind(this, 'password_confirmation')} value={this.state.userdata.password_confirmation}/>
                    <label>Email:</label>
                        <input type="text" onChange={this.handleChange.bind(this, 'email')} value={this.state.userdata.email}/>
                    <input className="btn-submit" type="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null,{addUser})(RegisterForm));
