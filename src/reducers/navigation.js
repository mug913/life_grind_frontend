

export default function navReducer(state = {}, action) {

    switch(action.type) {
        case "REDIRECT":
            debugger
           return { redirectTo: action.payload }
           
       
        default:
            return state;
    }


}
