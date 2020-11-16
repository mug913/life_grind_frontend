export default function goalsReducer(state, action) {

    switch(action.type) {
        case "GET_GOAL_ENTRIES":
            return { ...state, }
       
          
        default:
            return {...state};
    }


}