
const base_url = runtimeEnv().REACT_APP_API_URL;


export function addRecord(user_id,goal,record_data) {
    return (dispatch) => {
    fetch(`${base_url}users/${user_id}/goals/${goal.id}/goal_records`,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(record_data)}
    )
  .then(response => response.json())
  .then(record_data => {
          dispatch({ type: 'GET_GOAL_RECORDS', record_data, goal })
               })
  }
}


// export function getGoalRecords(user_id, goal_id, goal_data) {
//     return (dispatch) => {
//       fetch(`${base_url}/users/${user_id}/goals/${goal_id}/goal_records`)
//       .then(response => response.json())
//       .then(record_data => {
//         dispatch({ type: 'GET_GOAL_RECORDS', goal_data, record_data });
//         });
//     };
//   }