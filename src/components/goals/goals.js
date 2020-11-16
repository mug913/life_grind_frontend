import React, { Component } from 'react';
import Goal from '../goals/goal'

class Goals extends Component {
  render() {
    return(
      <ul>
        {this.props.goals.map(goal => <Goal goal={goal} deleteGoal={this.props.deleteGoal}/>)}
      </ul>
    );
  }
};

export default Goals;