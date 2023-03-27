import axios from "axios"

const request = axios.create({
    baseURL: "https://api.terminus.run",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default request
