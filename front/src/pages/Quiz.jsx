import { useState } from "react"
import { BodyWrap } from "../common"
import { Termi } from "../component/terminal"
import { Prompt } from "../component/prompt"
import io from "socket.io-client"
import { Submit } from "../component/submitCard"

export const Quiz = () => {
    const [submit, setSubmit] = useState(false)
    const domain = process.env.REACT_APP_BACKSERVER
    const port = process.env.REACT_APP_PORT
    const backserver = `${domain}:${port}`
    const socket = io(backserver)

    return (
        <>
            <Prompt />
            <Termi height={60} socket={socket} setSubmit={setSubmit} />
            {submit && <Submit setSubmit={setSubmit} />}
        </>
    )
}
