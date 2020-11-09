

export default function usersReducer(state = {
    username: ''
    }, action) {
    switch(action.type) {
        case "LOG_IN":
            console.log(state)
            return { ...state, username: state.username.concat({username: action.username})}
       
        default:
            return state;
    }


}
