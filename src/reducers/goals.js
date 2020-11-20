const initialGoalState = {
user_goals: [{name: "Day", position: 0, entries: []},
{name: "new goal", position: 1, field_number: 0, entries: []},
{name: "new goal", position: 2, field_number: 0, entries: []},
{name: "new goal", position: 3, field_number: 0, entries: []},
{name: "new goal", position: 4, field_number: 0, entries: []},
{name: "new goal", position: 5, field_number: 0, entries: []}]
}

export default function goalsReducer(state = initialGoalState, action) {

    switch(action.type) {
        // case "GET_GOAL_ENTRIES":
        //     return { ...state, }

        case "LOAD_GOALS":
            return {...state, 
                    user_goals: insertNewGoals(state.user_goals, action.payload.goals) }

        case "DELETE_GOAL":
            return { ...state, 
                    user_goals: resetGoalSlot(state.user_goals, action.goal_id)}
                 
        case "ADD_GOAL":
            return {...state, 
                user_goals: insertNewGoal(state.user_goals, action.payload) }

        default:
            return {...state};
    }

    function insertNewGoals(array, action) {
        action.forEach(g => {
        array = [...array.slice(0, g.position),
                g,
                ...array.slice(g.position+1)]
           })
        return array
    }

    function insertNewGoal(array, action) {
        return [...array.slice(0, action.position),
                action,
                ...array.slice(action.position+1)]
    }

    function resetGoalSlot(array, action) {
        return array.map((g) => {
            if (g.id !== action.id) {
                return g}
        return {name: "new goal", position: g.position, entries: []}
        })
    }
}