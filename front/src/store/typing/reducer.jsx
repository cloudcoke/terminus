import { TYPING_DISPLAY, TYPING_START, TYPING_STOP } from "./types"

const initialState = {
    error: null,
    displayText: "",
    isTyping: false,
}
export const typing = (state = initialState, action) => {
    switch (action.type) {
        case TYPING_START:
            return {
                ...state,
                isTyping: true,
                error: null,
            }
        case TYPING_STOP:
            return {
                ...state,
                isTyping: false,
                error: null,
            }
        case TYPING_DISPLAY:
            return {
                ...state,
                displayText: action.payload,
                isTyping: true,
            }
        default:
            return state
    }
}
