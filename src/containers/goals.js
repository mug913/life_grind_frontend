import React, { Component } from 'react';
import { connect } from 'react-redux'
import Goals from '../components/goals/goals'

class GoalsContainer extends Component {

    render() {
      if (this.props.goals.length === 0) {
        return (
          <div>
            {"loading"}
          </div>)
      }
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
    goals: state.goalsReducer.user_goals
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoalsContainer);