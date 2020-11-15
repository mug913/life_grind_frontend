
const base_url = "http://127.0.0.1:9393/api/v1/"

export function addUser(data) {
    return (dispatch) => {
      fetch(`${base_url}users`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)})
    .then(response => response.json())
    .then(user => {
                 dispatch({ type: 'ADD_USER', username: user.username, user_id: user.id });
                 })
     }
  }

  export function validateUser(data) {
    return (dispatch) => {
      fetch(`${base_url}login`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)})
        .then(response => response.json())
        .then(user => {dispatch(loginUser(user))})
      }
    }
    
  

  export function loginUser(id) {
    return (dispatch) => {
      fetch(`${base_url}/users/${id}`)
      .then(response => response.json())
      .then(user_data => {
        dispatch({ type: 'LOGIN_USER', payload: user_data });
        });
    };
  }


