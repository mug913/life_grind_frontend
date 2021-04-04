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
                    goal_records: addGoalRecord(state.goal_records, action.record_data, action.goal.position)}

            case "CLEAR_GOAL_RECORDS":
                return {...state, 
                    goal_records: clearGoalRecords(state.goal_records, action.goal.position)}

            case "ADD_GOAL_RECORD":
                return {...state, 
                    goal_records: addGoalRecord(state.goal_records, action.record_data, action.goal_data.goaldata.position)}
                 
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

 
    function addGoalRecord(array, recorddata, position ) {
        const target = array[position]
        const result = [...target.slice(0),recorddata]
        return [...array.slice(0,position),
            result,
            ...array.slice(position+1)]
    }
    
 //clear state goal records at position of deleted goal.    
    function clearGoalRecords(array, position) {
        return [...array.slice(0,position),
            [],
            ...array.slice(position+1)]
    }
    
