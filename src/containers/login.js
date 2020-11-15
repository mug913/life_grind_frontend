import React, { Component } from 'react';
import LoginForm from '../components/users/loginForm';



class LoginContainer extends Component {

  render() {
    return (
      <div>
        <LoginForm submitLogin={this.props.loginUser}/>
      </div>
    )
    }
}


export default LoginContainer;