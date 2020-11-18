const initialRecordState = {
    goal_records: []
    }
    
    export default function recordsReducer(state = initialRecordState, action) {
    
        switch(action.type) {
            
            case "LOAD_RECORDS": 
                return {...state, 
                goal_records: getGoalRecords(state.goal_records, action.payload.goals)}
    
            default:
                return {...state};
        }
    }


    function getGoalRecords(array, action) {
        action.forEach(g => {
            array = [...array.slice(0, g.position),
                    g.goal_records,
                    ...array.slice(g.position+1)]
               })
            return array
        }


    
