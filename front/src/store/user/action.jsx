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
export const UserLogin = ({ userId, userPw }) => {
    return async (dispatch) => {
        dispatch({ type: USER_START })
        try {
            const response = await request.post("/auth", { userId, userPw })
            console.log(response)
            const { status } = response.data
            if (status === 200) {
                dispatch(RequestSuccess({ isLogin: true, data: { userId } }))
            }
            return status
        } catch (error) {
            dispatch(RequestError(error))
        }
    }
}
export const UserLogout = ({ userId, userPw }) => {
    return async (dispatch) => {
        dispatch({ type: USER_START })
        try {
            const response = await request.get("/auth", { userId, userPw })
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
