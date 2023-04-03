import { Termi } from "../component/terminal"
import io from "socket.io-client"

export const FreeTerm = () => {
    const domain = process.env.REACT_APP_BACKSERVER
    const port = process.env.REACT_APP_PORT
    const backserver = `${domain}:${port}`
    const socket = io(backserver)

    return (
        <>
            <Termi socket={socket} />
        </>
    )
}
