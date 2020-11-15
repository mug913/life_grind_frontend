const initialState = {
    username: "user"
}

export default function usersReducer(state = initialState, action) {

    switch(action.type) {
        case "ADD_USER":
            return { ...state, username: action.username, user_id: action.user_id}
           
       
        default:
            return {...state};
    }


}
