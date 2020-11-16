import React from "react";
import {Component} from 'react';
import { connect } from 'react-redux';
import GoalsContainer from '../../containers/goals'

class Home extends Component {

render(){
    
    return (
        <div>
            <h1>{this.props.username}'s Page</h1>
            <p>user id: {this.props.user_id}</p>
            < GoalsContainer />
        </div>
        
    )
   
}

}

const mapStateToProps = state => {
    return {
      username: state.usersReducer.username,
      user_id: state.usersReducer.user_id
    }
  }
  
export default connect(mapStateToProps)(Home);