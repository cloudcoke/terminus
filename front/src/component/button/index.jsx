import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { changeExamMode } from "../../store/examMode"
import { Btn } from "./styled"

export const Button = (props) => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const location = useLocation()
    const { text, height, long, background, socket, setSubmit, fontsize } = props
    const NAV = ({ text }) => {
        const level = {
            easy: 0,
            middle: 1,
            hard: 2,
        }
        const list = useSelector((state) => state)
        const difficulty = useMemo(() => location.pathname.slice(1).split("/")[1])
        const currentCommand = useMemo(() => location.pathname.slice(1).split("/")[2])

        const handlePrevBtn = () => {
            const presentIndex = list.mode.list[level[difficulty]].command.map((v) => v.command).indexOf(currentCommand)
            const prevObj = list.mode.list[level[difficulty]].command[presentIndex - 1]
            if (prevObj) navigator(`/quiz/${difficulty}/${prevObj.command}`)
        }
        const handleNextBtn = () => {
            setSubmit && setSubmit(false)
            const presentIndex = list.mode.list[level[difficulty]].command.map((v) => v.command).indexOf(currentCommand)
            const nextObj = list.mode.list[level[difficulty]].command[presentIndex + 1]
            if (nextObj) navigator(`/quiz/${difficulty}/${nextObj.command}`)
        }
        const handleSocket = () => {
            socket.emit("send", "clear")
        }
        const handleClose = () => {
            navigator("/")
        }
        const hadleSubmit = () => {
            setSubmit(true)
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
                return (
                    <div className="NLink" onClick={handlePrevBtn}>
                        {text}
                    </div>
                )
            case "Next":
            case "Next Level":
                return (
                    <div className="NLink" onClick={handleNextBtn}>
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
                <NAV text={text} />
            </Btn>
        </>
    )
}
