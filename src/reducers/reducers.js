import { combineReducers } from "redux";
import usersReducer from './users'

const appReducer = combineReducers({
    usersReducer
})

export default appReducer