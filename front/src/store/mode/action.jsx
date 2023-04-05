import { useSelector } from "react-redux"
import request from "../../utils/request"
import { CHANGE_MODE, CHANGE_LIST } from "./type"

export const ChangeMode = (payload) => ({
    type: CHANGE_MODE,
    payload,
})
export const ChangeList = (payload) => ({
    type: CHANGE_LIST,
    payload,
})

export const ModeList = (mode) => {
    return async (dispatch) => {
        try {
            const kind = mode ? "linux" : "sql"
            const response = await request.get(`/quiz/${kind}`)
            dispatch(ChangeList({ list: response.data, kind }))
            return response
        } catch (error) {}
    }
}
