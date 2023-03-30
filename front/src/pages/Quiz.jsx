import { useState } from "react"
import { BodyWrap } from "../common/body"
import { Button } from "../component"
import { Termi } from "../component/Quiz"
import { PromptWrap } from "../component/Quiz/styled"
import io from "socket.io-client"

export const Quiz = () => {
    const domain = process.env.REACT_APP_BACKSERVER
    const port = process.env.REACT_APP_PORT
    const backserver = `${domain}:${port}`
    const socket = io(backserver)

    return (
        <>
            <BodyWrap>
                <PromptWrap />
                <Termi height={65} socket={socket} />
            </BodyWrap>
        </>
    )
}
