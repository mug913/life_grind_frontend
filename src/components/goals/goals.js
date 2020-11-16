import React, { Component } from 'react';
import Goal from './goal'

class Goals extends Component {
  render() {
    return(
     <div>
        {this.props.goals.map(goal => <Goal goal={goal} deleteGoal={this.props.deleteGoal} />)}
    </div>
    );
  }
};

export default Goals;