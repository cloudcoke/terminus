import { CHANGE_EXAM_MODE } from "./type"

const initialState = {
    examMode: false,
}

export const examMode = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_EXAM_MODE:
            return { ...state, examMode: !state.examMode }
        default:
            return state
    }
}
