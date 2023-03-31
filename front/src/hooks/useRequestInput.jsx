export const RequestInput = (e) => {
    if (e.keyCode === 13) {
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
            e.defaultPrevented = false
            console.log(e)
            return e.target.value
        }
    }
}
