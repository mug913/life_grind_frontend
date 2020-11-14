import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/users/loginForm';
import { loginUser} from '../actions/userActions'


class LoginContainer extends Component {

  render() {
    return (
      <div>
        <LoginForm submitLogin={this.props.loginUser}/>
      </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        loginUsers: () => dispatch(loginUser())}
}

const mapStateToProps = state => {
    return {username: state.username }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);