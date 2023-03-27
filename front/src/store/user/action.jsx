import request from "../../utils/request"
import { USER_ERROR, USER_START, USER_SUCCESS } from "./type"

export const RequestError = (payload) => ({
    type: USER_ERROR,
    payload,
})
export const RequestSuccess = (payload) => ({
    type: USER_SUCCESS,
    payload,
})
export const UserLogin = () => {
    return async (dispatch) => {
        dispatch({ type: USER_START })
        try {
            const response = await request.post("/auth")
            dispatch(RequestSuccess(response.data))
        } catch (error) {
            dispatch(RequestError(error))
        }
    }
}
export const UserLogout = () => {
    return async (dispatch) => {
        dispatch({ type: USER_START })
        try {
            const response = await request.get("/auth")
            console.log(response)
            dispatch(RequestSuccess(response.data))
        } catch (error) {
            dispatch(RequestError(error))
        }
    }
}
export const UserCheck = () => {
    return console.log(document.cookie)
}
