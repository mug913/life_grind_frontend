import React from "react";
import {Component} from 'react';
import { connect } from 'react-redux';
import ColorBar from '../../components/background/gradient';
import GoalsContainer from '../../containers/goals'
import './home.css'

class Home extends Component {

render(){
    
    return (
      <div>
        < ColorBar color1="rgb(255,000,000)" />
        <div className="Title">
            <h1>{this.props.username}'s Page</h1>
        </div>
        <div className="Goals">
            <p>user id: {this.props.user_id}</p>
            
            < GoalsContainer />
            </div>
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