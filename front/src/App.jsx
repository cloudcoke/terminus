import { Header } from "./common"
import styled from "styled-components"
import { BodyWrap } from "./common/body"
import { AppRouter } from "./routes"

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 192rem;
    height: 108rem;
`

const App = () => {
    return (
        <Wrap>
            <Header />
            <BodyWrap>
                <AppRouter />
            </BodyWrap>
        </Wrap>
    )
}

export default App
