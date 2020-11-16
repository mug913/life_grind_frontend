const initialState = {
    username: "user",
    user_id: "",
    user_goals: [{name: "DDay", position: 0, entries: []},
    {name: "new goal", position: 1, entries: []},
    {name: "new goal", position: 2, entries: []},
    {name: "new goal", position: 3, entries: []},
    {name: "new goal", position: 4, entries: []},
    {name: "new goal", position: 5, entries: []}]
}

export default function usersReducer(state = initialState, action) {

    switch(action.type) {
        case "ADD_USER":
            return { ...state, username: action.username, user_id: action.user_id}
           
        case "LOGIN_USER":
            return { ...state, username: action.payload.username, 
                    user_goals: insertGoals(state.user_goals, action.payload.goals), user_id: action.payload.id}
       
        default:
            return {...state};
    }


}

function insertGoals(array, action) {
    action.forEach(g => {
    array = [...array.slice(0, g.position),
            g,
            ...array.slice(g.position+1)]
       })
    return array
}