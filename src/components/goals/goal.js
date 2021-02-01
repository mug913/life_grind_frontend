import React, { Component } from 'react';
import NewGoal from './newGoal';
import DeleteGoal from './deleteGoal';
import AddRecord from './addRecord.js'
import DisplayEntries from './displayEntries.js'

class Goal extends Component {
 

  handleOnClick = () => {
    this.props.deleteGoal(this.props.goal.id)
  }

  optionDisplay = (goal) => {
  if (goal.name === "new goal") {
    return <NewGoal goal_position={goal.position}/>;
    }
    return <div> 
      <AddRecord goal_position={goal.position}/>
      <DisplayEntries goal_position={goal.position} field_number={goal.field_number} />
      <DeleteGoal goal={goal} />
    </div>
  }
  
 
  render() {
    let streak,level = ""
    const { goal } = this.props;
    if (goal.name !== 'new goal'){
    streak = `Streak: ${goal.streak}`
    level = `Level: ${goal.level}`}
    if (goal.position !== 0 ) {
    return (
      <div className="Goal">
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
