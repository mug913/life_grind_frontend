import React, { Component } from 'react';
import { connect } from 'react-redux'
import Goals from '../components/goals/goals'

class GoalsContainer extends Component {

    render() {
      console.log(this.props)
        return (
        <div>
           <Goals deleteGoal={this.props.deleteGoal} goals={this.props.goals}/>
        </div>
      )
      }
}
  
const mapDispatchToProps = dispatch => {
  return {
  //  addGoal: text => dispatch({type: "ADD_GOAL", payload: goalData}),
    deleteGoal: id => dispatch({type: "DELETE_GOAL", id})
  }
}

const mapStateToProps = state => {
  return {
    goals: state.usersReducer.user_goals
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoalsContainer);