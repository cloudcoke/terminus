import { memo, useState } from "react"
import { BodyWrap } from "../common"
import { Termi } from "../component/terminal"
import { Prompt } from "../component/prompt"
import io from "socket.io-client"
import { Submit } from "../component/submitCard"

export const Quiz = memo(({ socket }) => {
    const [submit, setSubmit] = useState(false)
    console.log(socket)
    console.log(1)
    return (
        <>
            <Prompt />
            <Termi height={60} socket={socket} setSubmit={setSubmit} />
            {submit && <Submit setSubmit={setSubmit} />}
        </>
    )
})
