import styled from "styled-components"

export const GraphWrap = styled.div`
    ${(props) => (props.flex ? "display:flex;" : "")}
    justify-content: flex-end;
    margin: 5rem 0 0 0;
    width: 70%;
    height: ${(props) => props.height}rem;
`
