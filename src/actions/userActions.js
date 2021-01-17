
const base_url = process.env.REACT_APP_API_URL;
const app_url = process.env.REACT_APP_URL;

  export function loginUser(data) {
    return (dispatch) => {
      fetch(`${app_url}auth/sign_in`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)})
        .then(response => response.json()) 
        .then(user_data => {
          fetch(`${base_url}users/${user_data.data.id}`)
            .then(response => response.json())
            .then(user_response => {
              console.log(user_response)
              dispatch({ type: 'LOGIN_USER', payload: user_response })
              dispatch({ type: 'LOAD_RECORDS', payload: user_response })
              dispatch({ type: 'LOAD_GOALS', payload: user_response });
            });
          })
    }
  }    
      // .done((response, status, jqXHR) => {
      //   sessionStorage.setItem('user', 
      //   JSON.stringify({
      //     'access-token': jqXHR.getResponseHeader('access-token'),
      //     client: jqXHR.getResponseHeader('client'),
      //     uid: response.data.uid
      //   }));
      // }).then(response => {
      //          dispatch({ type: 'LOGIN_USER', payload: response })
      //          dispatch({ type: 'LOAD_RECORDS', payload: response })
      //          dispatch({ type: 'LOAD_GOALS', payload: response });
      //         });
    //  this.props.history.push('/')
  
  
export function addUser(data) {
    return (dispatch) => {
      fetch(`${app_url}auth`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)})
      .then(response => response.json())
      .then(response => {
        console.log(response.status)
        if(response.status === `success`){
          dispatch(loginUser(data))
        }
    }) 
    //response.json())
    // .then(user => {dispatch(validateUser(user))
    //})
    }
  }

  // export function validateUser(data) {
  //   return (dispatch) => {
  //     fetch(`${base_url}login`,{
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(data)})
  //       .then(response => response.json())
  //       .then(user => {dispatch(loginUser(user))})
  //     }
  //   }
    
//   export function loginUser(id) {
//     return (dispatch) => {
//       fetch(`${base_url}users/${id}`)
//       .then(response => response.json())
//       .then(user_data => {
//         dispatch({ type: 'LOGIN_USER', payload: user_data })
//         dispatch({ type: 'LOAD_RECORDS', payload: user_data })
//         dispatch({ type: 'LOAD_GOALS', payload: user_data });
//         });
//     };
//   }

