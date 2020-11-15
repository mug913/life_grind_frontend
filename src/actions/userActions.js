
const base_url = "http://127.0.0.1:9393/api/v1/"

export function addUser(data) {
    return (dispatch) => {
   //   dispatch({ type: 'START_ADD_USERS_REQUEST' });
      fetch(`${base_url}users`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)})
    .then(response => response.json())
    .then(user => {
                 dispatch({ type: 'ADD_USER', payload: user.username });
                 })
     }
  }

  export function loginUser() {
    return (dispatch) => {
      dispatch({ type: 'START_ADD_USERS_REQUEST' });
      fetch(`${base_url}users`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          username: "test.username",
          email: "test@email",
          })})
    .then(response => response.json())
    .then(users => dispatch({ type: 'ADD_USER', users }));
    };
  }


