import { Header } from "./common"
import { Body } from "./pages"
import styled from "styled-components"
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
            <Body />
        </Wrap>
    )
}

export default App
