const initialUserState = {
    username: "user",
    user_id: ""}

export default function usersReducer(state = initialUserState, action) {

    switch(action.type) {
        case "ADD_USER":
            return { ...state, username: action.name, user_id: action.user_id}
           
        case "LOGIN_USER":
            return { ...state, username: action.payload.name, user_id: action.payload.id}
       
        default:
            return {...state};
    }


}

