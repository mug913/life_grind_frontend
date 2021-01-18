import {addRecord}from './recordActions'



const api_url = process.env.REACT_APP_API_URL;

  export function deleteGoal(goal) {
    return (dispatch) => {
        fetch(`${api_url}goals/${goal.id}`, {
            method: 'DELETE'})
        .then(response => response.json())
        .then(goal_id => {dispatch({ type: 'DELETE_GOAL', goal_id })
                         dispatch({ type: 'CLEAR_GOAL_RECORDS', goal})});
        };
}
  
  export function addGoal(user_id,data) {
    console.log(data.goaldata)
    return (dispatch) => {
      fetch(`${api_url}users/${user_id}/goals`,{
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

 