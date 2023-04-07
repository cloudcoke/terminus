import { Termi } from "../component/terminal"
import { memo, useEffect } from "react"

export const FreeTerm = memo(({ socket }) => {
    return (
        <>
            <Termi socket={socket} />
        </>
    )
})
