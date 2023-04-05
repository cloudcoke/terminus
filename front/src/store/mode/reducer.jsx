import { CHANGE_MODE, CHANGE_LIST } from "./type"

const initialState = {
    isMode: true,
    kind: "",
    list: "",
}
export const mode = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            return { ...state, isMode: !action.payload }
        case CHANGE_LIST:
            return { ...state, list: action.payload.list, kind: action.payload.kind }
        default:
            return state
    }
}
