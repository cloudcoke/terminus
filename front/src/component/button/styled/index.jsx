import styled from "styled-components"

export const Btn = styled.div`
    width: ${(props) => (props.long ? props.height * 4 : props.height * 2.5)}rem;
    height: ${(props) => props.height + "rem"};
    border-radius: 0.5rem;
    background-color: ${(props) => (props.background ? props.background : "#233041")};
    font-size: ${(props) => (props.fontsize ? props.fontsize : "1.6")}rem;
    font-weight: bold;
    & > a,
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #fff;
    }
    .NLink:hover {
        border-radius: 0.5rem;
        background-color: #888888;
        cursor: pointer;
    }
`
