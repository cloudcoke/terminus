import { useState } from "react"
import styled, { css } from "styled-components"
import { Creator } from "../component/"
import { Light } from "../component/contributors/styled"
import flashCur from "../image/flashlight.cur"

const ContributorWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #242424;
    cursor: ${(props) => (props.lightState ? `default` : `url(${flashCur}), pointer`)};

    & > div {
        width: 70%;
    }
    & > div:nth-child(1) {
        height: 10rem;
        margin-top: 5rem;
    }
    & > div:nth-child(2) {
        height: 80rem;
        margin-top: 3rem;
        max-width: 100%;
    }
    .mainChild2 {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
    }
`

export const Contributors = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [lightState, setLightState] = useState(false)
    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        })
    }
    return (
        <>
            <ContributorWrap onMouseMove={handleMouseMove} lightState={lightState}>
                <Creator lightState={lightState} setLightState={setLightState} />
                {!lightState && <Light mousePosition={mousePosition} />}
            </ContributorWrap>
        </>
    )
}
