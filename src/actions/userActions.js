export function addUsers() {
    return (dispatch) => {
      dispatch({ type: 'START_ADD_USERS_REQUEST' });
      fetch("http://127.0.0.1:9393/api/v1/users/",{
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

