import { CHANGE_MODE, CHANGE_LIST } from "./type"

const initialState = {
    isMode: true,
    list: "",
}
export const mode = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            return { ...state, isMode: !action.payload }
        case CHANGE_LIST:
            return { ...state, list: action.payload }
        default:
            return state
    }
}
