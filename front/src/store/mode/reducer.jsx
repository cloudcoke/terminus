import { CHANGE_MODE, CHANGE_LIST, CHANGE_ENV } from "./type"

const initialState = {
    env: "",
    isMode: true,
    kind: "",
    list: "",
}
export const mode = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            return { ...state, isMode: !action.payload }
        case CHANGE_ENV:
            return { ...state, env: action.payload.env }
        case CHANGE_LIST:
            return { ...state, list: action.payload.list, kind: action.payload.kind }
        default:
            return state
    }
}
