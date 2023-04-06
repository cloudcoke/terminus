import { useEffect } from "react"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { changeExamMode } from "../../store/examMode"
import request from "../../utils/request"
import { Btn } from "./styled"

export const Button = (props) => {
    //
    //
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const location = useLocation()
    const { text, height, long, background, socket, answerSubmit, fontsize } = props
    //
    //
    const NAV = ({ text }) => {
        const { kind, list: naviList } = useSelector((state) => state.mode)
        const currentCommand = useMemo(() => location.pathname.slice(1).split("/")[2])

        const handleBtn = (e) => {
            const cases = e.target.innerHTML
            const includesArray = naviList
                .map((v) => v.command)
                .find((array) => array.some((obj) => obj.command === currentCommand))
                .map((v) => v.command)
            const presentIndex = includesArray.indexOf(currentCommand)
            if (cases === "Next" || cases === "Next Level") {
                // setSubmit && setSubmit(false)
                const nextCommand = includesArray[presentIndex + 1]
                if (nextCommand) navigator(`/quiz/${kind}/${nextCommand}`)
            } else if (cases === "Prev") {
                const prevCommand = includesArray[presentIndex - 1]
                if (prevCommand) navigator(`/quiz/${kind}/${prevCommand}`)
            }
        }
        const handleSocket = () => {
            socket.emit("send", "clear")
        }
        const handleClose = () => {
            navigator("/")
        }
        const hadleSubmit = async () => {
            const { answer, setSubmit } = answerSubmit
            if (answer) {
                const response = await request.post("/quiz/exam")
                setSubmit(true)
            }
        }

        switch (text) {
            case "Exam":
                return (
                    <div className="NLink" onClick={() => dispatch(changeExamMode())}>
                        {text}
                    </div>
                )
            case "Submit":
                return (
                    <div className="NLink" onClick={hadleSubmit}>
                        {text}
                    </div>
                )
            case "Prev":
            case "Next":
            case "Next Level":
                return (
                    <div className="NLink" onClick={handleBtn}>
                        {text}
                    </div>
                )
            case "Clear":
                return (
                    <div className="NLink" onClick={handleSocket}>
                        {text}
                    </div>
                )
            case "닫기":
                return (
                    <div className="NLink" onClick={handleClose}>
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
                <NAV text={text} answerSubmit={answerSubmit} />
            </Btn>
        </>
    )
}
