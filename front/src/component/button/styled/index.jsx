import styled from "styled-components"

export const Btn = styled.div`
    width: ${(props) => props.height * 2.5 + "rem"};
    height: ${(props) => props.height + "rem"};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #233041;
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
`
