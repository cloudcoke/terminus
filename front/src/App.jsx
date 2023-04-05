import { Header } from "./common"
import styled from "styled-components"
import { BodyWrap } from "./common/body"
import { AppRouter } from "./routes"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { ModeList } from "./store"

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
`
const App = () => {
    const Landscape = window.innerWidth > window.innerHeight && window.innerWidth > 767
    console.log(Landscape)
    const dispatch = useDispatch()
    const { isMode, list } = useSelector((state) => state.mode)
    const Liist = Array.from(list)
    useEffect(() => {
        dispatch(ModeList(isMode))
    }, [])

    return Landscape ? (
        <Wrap>
            <Header List={Liist} />
            <BodyWrap>
                <AppRouter List={Liist} />
            </BodyWrap>
        </Wrap>
    ) : (
        <Wrap>지원 준비중입니다.</Wrap>
    )
}

export default App
