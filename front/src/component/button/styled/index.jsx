import styled from "styled-components"

export const Btn = styled.div`
    width: ${(props) => (props.long ? props.height * 4 : props.height * 2.5)}rem;
    height: ${(props) => props.height + "rem"};
    border-radius: 0.5rem;
    background-color: #233041;
    font-size: 1.6rem;
    font-weight: bold;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #fff;
    }
`
