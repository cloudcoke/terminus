import { combineReducers } from "redux"
import { user } from "./user"
import { mode } from "./mode"
import { examMode } from "./examMode"

export const rootReducer = combineReducers({ user, mode, examMode })
