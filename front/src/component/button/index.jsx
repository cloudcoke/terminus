import { NavLink } from "react-router-dom"
import { Btn } from "./styled"

export const Button = ({ text, height, long, background, socket }) => {
    const NAV = ({ text }) => {
        switch (text) {
            case "Hint":
            case "Prev":
            case "Next":
            case "Submit":
                return <div className="NLink">{text}</div>
            case "Clear":
                return (
                    <div
                        onClick={() => {
                            socket.emit("send", "clear")
                        }}
                        className="NLink"
                    >
                        {text}
                    </div>
                )
            default:
                const path = text.toLowerCase().replace(" ", "")
                return <NavLink to={path}>{text}</NavLink>
        }
    }
    return (
        <>
            <Btn height={height} long={long} background={background}>
                <NAV text={text} />
            </Btn>
        </>
    )
}
