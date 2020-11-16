import React, { Component } from 'react';
import NewGoal from './newGoal';
import DeleteGoal from './deleteGoal';

class Goal extends Component {

  handleOnClick = () => {
    this.props.deleteGoal(this.props.goal.id)
  }

  optionDisplay = (goal) => {
  if (goal.name === "new goal") {
    return <NewGoal />;
    }
    return <DeleteGoal goal_id={goal.id} />;
  }


  render() {
    const { goal } = this.props;
    if (goal.position !== 0 ) {
    return (
      <div>
         <li key= {goal.id} >
        {goal.name}
        {this.optionDisplay(goal)}
        </li>
      </div>
    );
    }
    return null
  }
};

export default Goal;
