import { useState } from "react"
import { BodyWrap } from "../common"
import { Termi } from "../component/terminal"
import { PromptWrap } from "../component/terminal/styled"
import io from "socket.io-client"
import { Submit } from "../component/submitCard"

export const Quiz = ({ list }) => {
    const [submit, setSubmit] = useState(false)
    console.log(list)
    const domain = process.env.REACT_APP_BACKSERVER
    const port = process.env.REACT_APP_PORT
    const backserver = `${domain}:${port}`
    const socket = io(backserver)

    return (
        <>
            <BodyWrap>
                <PromptWrap />
                <Termi height={65} socket={socket} setSubmit={setSubmit} />
                {submit && <Submit setSubmit={setSubmit} />}
            </BodyWrap>
        </>
    )
}
