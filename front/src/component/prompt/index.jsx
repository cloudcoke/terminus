import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { PromptWrap, CommandST } from "./styled"

export const Prompt = () => {
    const [quiz, setQuiz] = useState({})
    const { examMode } = useSelector((state) => state.examMode)
    console.log(examMode)
    useEffect(() => {
        let List
        if (!examMode) {
            List = {
                idx: 1,
                command: "ls",
                prompt: "디렉토리 내에 파일 목록을 확인할 수 있는 명령어입니다.",
                option: [
                    {
                        command: "ls -a",
                        prompt: "-a에 대한 설명을 쓰면 된다.",
                    },
                    {
                        command: "ls -l",
                        prompt: "-l에 대한 설명을 쓰면 된다.",
                    },
                ],
            }
        } else {
            List = {
                exam: "hello 디렉터리 안에 있는 파일들의 자세한 내용과 숨김 파일을 출력해보세요.",
            }
        }
        setQuiz(List)
    }, [examMode])
    const option = (option) => {
        return option.map((v) => (
            <div className="option" key={v.command}>
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
            {quiz.option && option(quiz.option)}
        </PromptWrap>
    ) : (
        <PromptWrap>
            <div className="option">
                <div>{quiz.exam}</div>
            </div>
        </PromptWrap>
    )
}
