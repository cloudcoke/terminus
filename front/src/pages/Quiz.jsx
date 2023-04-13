import { memo, useState } from "react"
import { BodyWrap } from "../common"
import { Termi } from "../component/terminal"
import { Prompt } from "../component/prompt"
import io from "socket.io-client"
import { Submit } from "../component/submitCard"
import { useSelector } from "react-redux"

export const Quiz = memo(({ socket }) => {
    const [submit, setSubmit] = useState(false)
    return (
        <>
            <Prompt />
            <Termi height={60} socket={socket} setSubmit={setSubmit} />
            {submit && <Submit setSubmit={setSubmit} />}
        </>
    )
})
