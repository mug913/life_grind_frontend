import {addRecord}from './recordActions'


const base_url = "https://immense-meadow-65005.herokuapp.com/api/v1/"

  export function deleteGoal(goal) {
    return (dispatch) => {
        fetch(`${base_url}goals/${goal.id}`, {
            method: 'DELETE'})
        .then(response => response.json())
        .then(goal_id => {dispatch({ type: 'DELETE_GOAL', goal_id })
                         dispatch({ type: 'CLEAR_GOAL_RECORDS', goal})});
        };
}
  
  export function addGoal(user_id,data) {
    return (dispatch) => {
      fetch(`${base_url}users/${user_id}/goals`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data.goaldata)}
      )
    .then(response => response.json())
    .then(goal => {
                 dispatch(addRecord(goal.user_id, goal, data.recorddata))
                 dispatch({ type: 'ADD_GOAL', payload: goal })
                 })
    }
  }

 