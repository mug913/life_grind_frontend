const base_url = "http://127.0.0.1:9393/api/v1/"


export function addRecord(user_id,goal_id,data) {
    return (dispatch) => {
    fetch(`${base_url}users/${user_id}/goals/${goal_id}/goal_records`,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data.recorddata)}
    )
  .then(response => response.json())
  .then(record => {
               dispatch({ type: 'ADD_GOAL_RECORD', payload: record })
               })
  }
}


export function getGoalRecords(user_id,goal_id) {
    return (dispatch) => {
      fetch(`${base_url}/users/${user_id}/goals/${goal_id}/goal_records`)
      .then(response => response.json())
      .then(goal_data => {
        dispatch({ type: 'GET_GOAL_RECORDS', goal_id, payload: goal_data });
        });
    };
  }