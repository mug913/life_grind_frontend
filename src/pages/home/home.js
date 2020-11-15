import React from "react";
import {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component {

render(){
    
    return (
        <div>
            <h1>{this.props.username}'s Page</h1>
        </div>
        
    )
   
}

}

const mapStateToProps = state => {
    return {
      username: state.usersReducer.username
    }
  }
  
export default connect(mapStateToProps)(Home);