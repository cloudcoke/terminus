import { TYPING_START } from "./types"

export const StartTyping = (payload) => ({
    type: TYPING_START,
    payload,
})
