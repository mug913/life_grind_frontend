import { getGoal } from "./goalActions";

const api_url = process.env.REACT_APP_API_URL;


export function addRecord(user_id,goal,record_data) {
    return (dispatch) => {
    fetch(`${api_url}users/${user_id}/goals/${goal.id}/goal_records`,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({'goal_record': record_data})}
    )
  .then(response => response.json())
  .then(record_data => {
          dispatch({ type: 'GET_GOAL_RECORDS', record_data, goal })
          dispatch(getGoal(user_id,goal.id))
               })
  }
}
