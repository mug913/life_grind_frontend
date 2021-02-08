
import AsyncStorage from '@react-native-community/async-storage';
const base_url = process.env.REACT_APP_API_URL;


  export function loginUser(data) {
      return (dispatch) => {return fetch(`${base_url}auth/sign_in`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)})
        .then(function(res) {
          if(res.ok){
            console.log(res.headers.get('uid'))
            let accessToken = res.headers.get('access-token');
            let client      = res.headers.get('client');
            let expiry      = res.headers.get('expiry');
            let tokenType   = res.headers.get('token-type');
            let uid         = res.headers.get('uid');
            let authHeader  = {'client': client, expiry: expiry, uid: uid, 'access-token': accessToken, 'token-type': tokenType}
            AsyncStorage.setItem('auth_header', JSON.stringify(authHeader))
          } else {
            return Promise.reject(res);
          }
          return res.json();
         })
        .then(function(resJson) {
          if(!resJson.error) {
            AsyncStorage.setItem('user', JSON.stringify(resJson.data))
            dispatch(receiveLogin(resJson.data))
          }
        })
        //.then(response => { return response})
      }
    }     
          
 
          
  function receiveLogin(resp){
    return (dispatch) => {
      return AsyncStorage.getItem('auth_header', (err, result) => {
      fetch(`${base_url}users/${resp.id}`, {
        headers: JSON.parse(result)
      })
       .then(response => response.json())
       .then(user_response => {
              console.log(user_response)
              dispatch({ type: 'LOGIN_USER', payload: user_response })
              dispatch({ type: 'LOAD_RECORDS', payload: user_response })
              dispatch({ type: 'LOAD_GOALS', payload: user_response });
            })
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
      fetch(`${base_url}auth`,{
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

