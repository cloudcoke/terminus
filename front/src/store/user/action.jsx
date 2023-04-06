import { useNavigate } from "react-router-dom"
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
        try {
            const response = await request.post("/auth", { userId, userPw })
            const { status } = response
            if (status === 200) {
                dispatch(RequestSuccess({ isLogin: true, data: { userId } }))
            }
            return status
        } catch (error) {
            dispatch(RequestError(error))
        }
    }
}
export const UserLogout = () => {
    return async (dispatch) => {
        try {
            const response = await request.get("/auth")
            const { status } = response.data
            if (status === 200) {
                dispatch(RequestSuccess({ isLogin: false, data: { userId: "" } }))
            }
            return status
        } catch (error) {
            dispatch(RequestError(error))
        }
    }
}
export const UserSignUp = ({ userId, userPw }) => {
    return async (dispatch) => {
        try {
            const response = await request.post("/user", { userId, userPw })
            return response.data.status
        } catch (error) {}
    }
}
