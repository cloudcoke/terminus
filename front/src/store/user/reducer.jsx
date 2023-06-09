import { USER_ERROR, USER_START, USER_SUCCESS, USER_INIT } from "./type"

const initialState = {
    loading: false,
    error: null,
    isLogin: false,
    data: {
        userId: "",
    },
}
export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_INIT:
            return { ...state, error: null }
        case USER_START:
            return { ...state, loading: true, error: null }
        case USER_SUCCESS:
            return { ...state, error: null, loading: false, data: action.payload.data, isLogin: action.payload.isLogin }
        case USER_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
