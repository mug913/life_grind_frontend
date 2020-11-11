import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginInput from '../components/users/loginInput';
import { addUsers} from '../actions/userActions'

class UsersContainer extends Component {

  render() {
    return (
      <div>
        <LoginInput submitLogin={this.props.addUsers}/>
      </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        addUsers: () => dispatch(addUsers())}
}

const mapStateToProps = state => {
    return {username: state.username }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);