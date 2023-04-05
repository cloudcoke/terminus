import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import request from "../../utils/request"
import { PromptWrap, CommandST } from "./styled"

export const Prompt = () => {
    const location = useLocation()
    const [quiz, setQuiz] = useState({})
    const { examMode } = useSelector((state) => state.examMode)
    const [kind, command] = location.pathname.slice(1).split("quiz/")[1].split("/")

    let List
    console.log(command)
    const quest = async () => {
        const response = await request.get(`/quiz/${kind}/${command}`)
        console.log(response.data, 111111222222)
        setQuiz(response.data)
    }

    useEffect(() => {
        quest()
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
            <div className="option">
                <CommandST>{quiz.command}</CommandST>
                <div>: {quiz.prompt}</div>
            </div>
            {quiz.options && option(quiz.options)}
        </PromptWrap>
    ) : (
        <PromptWrap>
            <div className="option">
                <div>{quiz.exam}</div>
            </div>
        </PromptWrap>
    )
}
