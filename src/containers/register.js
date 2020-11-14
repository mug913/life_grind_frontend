import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../components/users/registerForm';
import { addUser} from '../actions/userActions'


class RegisterContainer extends Component {

  render() {
    return (
      <div>
        <RegisterForm submitRegister={this.props.registerUser}/>
      </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        registerUsers: () => dispatch(addUser())}
}

const mapStateToProps = state => {
    return {username: state.username }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterContainer);