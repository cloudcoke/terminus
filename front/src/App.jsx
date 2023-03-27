import { Header } from "./common"
import styled from "styled-components"
import { BodyWrap } from "./common/body"
import { AppRouter } from "./routes"
import { useDispatch, useSelector } from "react-redux"
import { user, UserCheck } from "./store/user"
import { useEffect } from "react"

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 192rem;
    height: 100vh;
`
const List = [
    {
        difficulty: "easy",
        command: [
            { command: "1" },
            { command: "2" },
            { command: "3" },
            { command: "4" },
            { command: "5" },
            { command: "6" },
        ],
    },
    {
        difficulty: "middle",
        command: [
            { command: "7" },
            { command: "8" },
            { command: "9" },
            { command: "11" },
            { command: "22" },
            { command: "33" },
        ],
    },
    {
        difficulty: "hard",
        command: [
            { command: "44" },
            { command: "55" },
            { command: "66" },
            { command: "77" },
            { command: "tail" },
            { command: "head" },
        ],
    },
]
const App = () => {
    const dispatch = useDispatch()
    const { userId } = useSelector((state) => state.user.data)
    console.log(userId)
    return (
        <Wrap>
            <Header List={List} />
            <BodyWrap>
                <AppRouter List={List} />
            </BodyWrap>
        </Wrap>
    )
}

export default App
