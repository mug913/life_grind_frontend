import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser} from '../../actions/userActions'
import { withRouter } from 'react-router-dom'


class LoginForm extends Component {
state = {userdata: {
        email: '',
        password: ''
        },
        redirect: '/home'
};

handleChange = (field, event) => {
    this.setState({userdata: {
        ...this.state.userdata,
        [field]: event.target.value
    }});
};

handleSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state.userdata)
    this.setState({
        email: "",
        password: ""
    })
    this.props.history.push(`${this.state.redirect}`)
  }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                        <input type="text" onChange={this.handleChange.bind(this, 'email')} value={this.state.email}/>
                    <label>Password</label>
                        <input type="password" onChange={this.handleChange.bind(this, 'password')} value={this.state.password}/>
                        <input type="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null,{loginUser})(LoginForm));