import styled from "styled-components"

const Flash = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100%;
    pointer-events: none;
    background: radial-gradient(circle at var(--x) var(--y), transparent 10%, rgba(0, 0, 0, 0.93) 40%);
`

export const Light = ({ mousePosition }) => {
    return (
        <>
            <Flash style={{ "--x": mousePosition.x - 484 + "px", "--y": mousePosition.y + "px" }} />
        </>
    )
}
