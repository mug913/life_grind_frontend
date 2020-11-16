
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