import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginInput from '../components/users/loginInput';

class UsersContainer extends Component {

  render() {
    return (
      <div>
        <LoginInput/>
      </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        sumbmitlogIn: username => dispatch({type: "LOG_IN", username})}
}

const mapStateToProps = state => {
    return {username: state.username }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);