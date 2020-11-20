const initialRecordState = {
    goal_records: [[],[],[],[],[],[]]
    }
    
    export default function recordsReducer(state = initialRecordState, action) {
    
        switch(action.type) {
            
            case "LOAD_RECORDS": 
                return {...state, 
                goal_records: getGoalRecords(state.goal_records, action.payload.goals)}

            case "GET_GOAL_RECORDS":
                return {...state, 
                    goal_records: addGoalRecord(state.goal_records, action.goal_data.goaldata.position, action.goal_data.recorddata)}

            case "CLEAR_GOAL_RECORDS":
                return {...state, 
                    goal_records: clearGoalRecords(state.goal_records, action.goal.position)}

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

 
    function addGoalRecord(array, position, recorddata) {
        const target = array[position]
        const result = [...target.slice(0),recorddata]
        return [...array.slice(0,position),
            result,
            ...array.slice(position+1)]
    }
    
     
    function clearGoalRecords(array, position) {
        return [...array.slice(0,position),
            [],
            ...array.slice(position+1)]
    }
    
