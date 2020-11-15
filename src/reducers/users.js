const initialState = {
    username: "user"
}

export default function usersReducer(state = initialState, action) {

    switch(action.type) {
        case "ADD_USER":
            return { ...state, username: action.payload}
           
       
        default:
            return {...state};
    }


}
