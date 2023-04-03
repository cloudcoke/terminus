import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Btn } from "./styled"

export const Button = (props) => {
    const { text, height, long, background, socket, setSubmit, fontsize } = props

    const NAV = ({ text }) => {
        const navigator = useNavigate()
        const location = useLocation()
        const handlePrevBtn = () => {
            const difficulty = location.pathname.slice(1).split("/")[1]
            const command = parseInt(location.pathname.slice(1).split("/")[2])
            const commandId = command <= 1 ? command : command - 1
            navigator(`/quiz/${difficulty}/${commandId}`)
        }
        const handleNextBtn = () => {
            const difficulty = location.pathname.slice(1).split("/")[1]
            const command = parseInt(location.pathname.slice(1).split("/")[2])
            console.log(command)
            const commandId = command >= 10 ? command : command + 1
            navigator(`/quiz/${difficulty}/${commandId}`)
        }

        switch (text) {
            case "Hint":
                return <div className="NLink">{text}</div>
            case "Submit":
                return (
                    <div
                        className="NLink"
                        onClick={() => {
                            setSubmit(true)
                        }}
                    >
                        {text}
                    </div>
                )
            case "Prev":
                return (
                    <div className="NLink" onClick={() => handlePrevBtn()}>
                        {text}
                    </div>
                )
            case "Next":
            case "Next Level":
                return (
                    <div
                        className="NLink"
                        onClick={() => {
                            setSubmit && setSubmit(false)
                            handleNextBtn()
                        }}
                    >
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
            <Btn height={height} long={long} background={background} fontsize={fontsize}>
                <NAV text={text} />
            </Btn>
        </>
    )
}
