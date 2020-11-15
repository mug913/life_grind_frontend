import React, { Component } from 'react'
import { connect } from 'react-redux';
import { validateUser} from '../../actions/userActions'


class LoginForm extends Component {
state = {
        username: '',
        password_digest: ''
    };

handleChange = (field, event) => {
    this.setState({
        [field]: event.target.value
    });
};

handleSubmit = event => {
    event.preventDefault()
    this.props.validateUser(this.state)
    this.setState({
        username: "",
        password_digest: ""
    })
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

export default connect(null,{validateUser})(LoginForm);