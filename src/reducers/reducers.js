import { combineReducers } from "redux";
import usersReducer from './users'
import recordsReducer from './records'
import goalsReducer  from './goals'

const appReducer = combineReducers({
    usersReducer,
    goalsReducer,
    recordsReducer
})

export default appReducer