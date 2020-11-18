import {addRecord}from './recordActions'


const base_url = "http://127.0.0.1:9393/api/v1/"

    export function getGoalEntries(user_id,goal_id) {
    return (dispatch) => {
      fetch(`${base_url}/users/${user_id}/goals/${goal_id}/goal_records`)
      .then(response => response.json())
      .then(goal_data => {
        dispatch({ type: 'GET_GOAL_ENTRIES', goal_id: goal_id, payload: goal_data });
        });
    };
  }

  export function deleteGoal(goal_id) {
    return (dispatch) => {
        fetch(`${base_url}goals/${goal_id}`, {
            method: 'DELETE'})
        .then(response => response.json())
        .then(goal_id => dispatch({ type: 'DELETE_GOAL', goal_id }));
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
                 dispatch(addRecord(goal.user_id,goal.id,data))
                 dispatch({ type: 'ADD_GOAL', payload: goal })
                 })
    }
  }

 