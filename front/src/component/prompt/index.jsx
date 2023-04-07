import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { changeExamMode } from "../../store"
import request from "../../utils/request"
import { PromptWrap, CommandST } from "./styled"

export const Prompt = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [quiz, setQuiz] = useState({})
    const { examMode } = useSelector((state) => state.examMode)
    const [kind, command] = location.pathname.slice(1).split("quiz/")[1].split("/")

    // 커맨드가 바뀔 때마다 요청
    const quest = async () => {
        const response = await request.get(`/quiz/${kind}/${command}`)
        setQuiz(response.data)
    }

    useEffect(() => {
        quest()
        if (examMode === true) {
            dispatch(changeExamMode())
        }
    }, [command])

    const option = (options) => {
        return options.map((v, i) => (
            <div className="option" key={i}>
                <CommandST>{v.command}</CommandST>
                <div>: {v.prompt}</div>
            </div>
        ))
    }

    return !examMode ? (
        <PromptWrap>
            <div className="wwwrap">
                <div className="option">
                    <CommandST>{quiz.command}</CommandST>
                    <div>: {quiz.prompt}</div>
                </div>
                {quiz.options && option(quiz.options)}
            </div>
        </PromptWrap>
    ) : (
        <PromptWrap>
            <div className="option">
                <div>{quiz.exam}</div>
            </div>
        </PromptWrap>
    )
}
