

export default function usersReducer(state = {}, action) {

    switch(action.type) {
        case "ADD_USER":
           return { ...state, username: action.payload}
           
       
        default:
            return state;
    }


}
