import { combineReducers } from "redux";
import usersReducer from './users'
import navReducer from './navigation'
import goalsReducer  from './goals'

const appReducer = combineReducers({
    usersReducer,
    navReducer,
    goalsReducer
})

export default appReducer