const initialGoalState = {
user_goals: [{name: "Day", position: 0, entries: []},
{name: "new goal", position: 1, entries: []},
{name: "new goal", position: 2, entries: []},
{name: "new goal", position: 3, entries: []},
{name: "new goal", position: 4, entries: []},
{name: "new goal", position: 5, entries: []}]
}

export default function goalsReducer(state = initialGoalState, action) {

    switch(action.type) {
        case "GET_GOAL_ENTRIES":
            return { ...state, }

        case "LOAD_GOALS":
            return {...state, 
                    user_goals: insertGoals(state.user_goals, action.payload.goals) }

        case "DELETE_GOAL":
            console.log(action.goal_id)
            return { ...state, 
                    user_goals: resetGoalSlot(state.user_goals, action.goal_id)}
                 
        default:
            return {...state};
    }

    function insertGoals(array, action) {
        action.forEach(g => {
        array = [...array.slice(0, g.position),
                g,
                ...array.slice(g.position+1)]
           })
        return array
    }

    function resetGoalSlot(array, action) {
        console.log(action.goal_id)
        return array.map((g) => {
            if (g.id !== action.id) {
                console.log(`false ${g.id}`)
                console.log(action.id)
                return g}
                console.log(`true ${g.id}`)
                console.log(action.id)
            return {name: "new goal", position: g.position, entries: []}
        })
    }
}