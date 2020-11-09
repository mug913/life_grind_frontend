import React, { Component } from 'react'
import { connect } from 'react-redux'
import loginInput from '../components/users/loginInput';
//import Users from '../components/restaurants/Restaurants';

class UsersContainer extends Component {

    render() {
        return(
            <div>
                <loginInput submitLogIn={this.props.submitLogin} />
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