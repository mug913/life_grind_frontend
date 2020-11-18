import React, { Component } from 'react';
import NewGoal from './newGoal';
import DeleteGoal from './deleteGoal';

class Goal extends Component {

  handleOnClick = () => {
    this.props.deleteGoal(this.props.goal.id)
  }

  optionDisplay = (goal) => {
  if (goal.name === "new goal") {
    return <NewGoal goal_position={goal.position}/>;
    }
    return <DeleteGoal goal_id={goal.id} />;
  }
  
  render() {
    let streak,level = ""
    const { goal } = this.props;
    if (goal.name !== 'new goal'){
    streak = `Streak: ${goal.streak}`
    level = `Level: ${goal.level}`}
    if (goal.position !== 0 ) {
    return (
      <div>
         <li key= {goal.id} >
        {goal.name}
        <div>
        {streak}{"\n"}
        {level}{"\n"}
        </div>
        {this.optionDisplay(goal)}
        </li>
      </div>
    );
    }
    return null
  }
};

export default Goal;
