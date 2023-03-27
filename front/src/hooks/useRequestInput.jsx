import request from "../utils/request"

export const RequestInput = (e) => {
    if (e.key === "Enter") {
        if (e.target.className === "userId") {
            // const userId = e.target.value
            // const response = request.get("/check", {userId})
            // const checkid = response.data
            const checkid = true
            return { userId: checkid }
        } else if (e.target.className === "userPw") {
            const checkpw = true
            return { userPw: checkpw }
        } else if (e.target.className === "submit") {
            e.preventDefault()
            return e.target.value
        }
    }
}
