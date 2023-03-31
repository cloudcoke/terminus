import { Header } from "./common"
import styled from "styled-components"
import { BodyWrap } from "./common/body"
import { AppRouter } from "./routes"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Loading } from "./component"
import { USER_INIT } from "./store/user"

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
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
    const [mode, setMode] = useState(true)

    const dispatch = useDispatch()
    const { loading, isLogin, error } = useSelector((state) => state.user)
    // console.log(state)
    // const { userData } = useSelector((state) => state.user.data)
    // console.log(userData)
    // const userId = userData ? userData : ""
    if (loading) return <Loading />
    if (error) return <>{error.message}</>
    return (
        <Wrap>
            <Header List={List} Mode={{ mode, setMode }} />
            <BodyWrap>
                <AppRouter List={List} />
            </BodyWrap>
        </Wrap>
    )
}

export default App
