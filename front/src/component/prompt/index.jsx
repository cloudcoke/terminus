import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { changeExamMode } from "../../store"
import request from "../../utils/request"
import { PromptWrap, CommandST, BottomEffectSC } from "./styled"

export const Prompt = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [isBottom, setIsBottom] = useState(false)
    const [quiz, setQuiz] = useState({})
    const { examMode } = useSelector((state) => state.examMode)
    const scrollRef = useRef(null)
    const [kind, command] = location.pathname.slice(1).split("quiz/")[1].split("/")

    // 커맨드가 바뀔 때마다 요청
    const quest = async () => {
        const response = await request.get(`/quiz/${kind}/${command}`)
        setQuiz(response.data)
    }
    // bottom 감지
    const handleScroll = (e) => {
        const { scrollHeight, scrollTop, clientHeight } = e.target
        const isAtBottom = scrollTop + clientHeight > scrollHeight - 0.5
        setIsBottom(isAtBottom)
    }
    useEffect(() => {
        quest()
        if (examMode === true) {
            dispatch(changeExamMode())
        }
    }, [command, isBottom])
    useEffect(() => {
        console.log(scrollRef.current.clientHeight < scrollRef.current.scrollHeight)
        const isAtBottom = scrollRef.current.clientHeight < scrollRef.current.scrollHeight
        setIsBottom(isAtBottom)
    }, [quiz])

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
            <div className="wwwrap" onScroll={handleScroll} ref={scrollRef}>
                <div className="option">
                    <CommandST>{quiz.command}</CommandST>
                    <div>: {quiz.prompt}</div>
                </div>
                {quiz.options && option(quiz.options)}
                {!isBottom && <BottomEffectSC />}
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
