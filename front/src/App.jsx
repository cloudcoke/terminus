import { Header } from "./common"
import styled from "styled-components"
import { BodyWrap } from "./common/body"
import { AppRouter } from "./routes"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { ChangeEnv, ModeList } from "./store"
import io from "socket.io-client"
import { AA } from "./hooks/useState"

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
`
const domain = process.env.REACT_APP_BACKSERVER
const port = process.env.REACT_APP_PORT
const backserver = `${domain}:${port}`
const socket = io(backserver)
const App = () => {
    const testState = AA(false)
    console.log(testState.test)
    const Landscape = window.innerWidth > window.innerHeight && window.innerWidth > 767
    const connectEnv = window.innerWidth < 767 ? "null" : window.innerWidth < 1250 ? "mobile" : "desctop"
    const dispatch = useDispatch()
    const { isMode, list, env } = useSelector((state) => state.mode)
    const Liist = Array.from(list)
    useEffect(() => {
        dispatch(ModeList(isMode))
        dispatch(ChangeEnv({ env: connectEnv }))
    }, [])

    return Landscape ? (
        <Wrap>
            <Header List={Liist} />
            <BodyWrap>
                <AppRouter List={Liist} socket={socket} />
            </BodyWrap>
        </Wrap>
    ) : (
        <Wrap>지원 준비중입니다.</Wrap>
    )
}

export default App
