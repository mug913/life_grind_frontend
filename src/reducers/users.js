const initialState = {
    username: "user",
    user_goals: []
}

export default function usersReducer(state = initialState, action) {

    switch(action.type) {
        case "ADD_USER":
            return { ...state, username: action.username, user_id: action.user_id}
           
        case "LOGIN_USER":
                return { ...state, username: action.payload.username, user_goals: action.payload.goals, user_id: action.payload.id}
       
        default:
            return {...state};
    }


}
