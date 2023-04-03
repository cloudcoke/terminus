import styled from "styled-components"

export const CardSt = styled.div`
    ${(props) => (props.flex ? "display:flex; " : "")}
    justify-content: flex-end;
    width: 100%;
    height: ${(props) => props.height}rem;
`
