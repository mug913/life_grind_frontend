import React, { Component } from 'react'
import { connect } from 'react-redux';
import { validateUser} from '../../actions/userActions'
import { withRouter } from 'react-router-dom'


class LoginForm extends Component {
state = {userdata: {
        username: '',
        password_digest: ''
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
    this.props.validateUser(this.state.userdata)
    this.setState({
        username: "",
        password_digest: ""
    })
    this.props.history.push(`${this.state.redirect}`)
  }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>>
                    <label>Login</label>
                        <input type="text" onChange={this.handleChange.bind(this, 'username')} value={this.state.username}/>
                    <label>Password</label>
                        <input type="password" onChange={this.handleChange.bind(this, 'password_digest')} value={this.state.password_digest}/>
                        <input type="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null,{validateUser})(LoginForm));