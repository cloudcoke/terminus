import { combineReducers } from "redux"
import { user } from "./user"
import { mode } from "./mode"

export const rootReducer = combineReducers({ user, mode })
