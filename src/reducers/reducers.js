import { combineReducers } from "redux";
import usersReducer from './users'
import navReducer from './navigation'

const appReducer = combineReducers({
    usersReducer,
    navReducer
})

export default appReducer