import { NavLink, useNavigate } from "react-router-dom"
import { Btn } from "./styled"

export const Button = ({ text, height, long, background, socket }) => {
    const NAV = ({ text }) => {
        const navigator = useNavigate()
        const handleNextBtn = () => {
            navigator("/")
        }
        const handlePrevBtn = () => {
            navigator("/")
        }

        switch (text) {
            case "Hint":
            case "Submit":
                return <div className="NLink">{text}</div>
            case "Prev":
                return (
                    <div className="NLink" onClick={() => handlePrevBtn()}>
                        {text}
                    </div>
                )
            case "Next":
            case "Next Level":
                return (
                    <div className="NLink" onClick={() => handleNextBtn()}>
                        {text}
                    </div>
                )
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
