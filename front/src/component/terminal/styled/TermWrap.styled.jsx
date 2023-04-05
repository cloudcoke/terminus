import styled from "styled-components"

export const TermWrap = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height + "%" : "100%")};
    font-size: 2rem;
    font-family: "D2Coding";

    .xterm-viewport {
        background-color: #242424 !important;
        overflow-y: scroll;
        height: 100%;
    }
    .xterm-dom-renderer-owner-1 .xterm-rows {
        /* color: #029502 !important; */
    }
    & span {
        background-color: initial;
        width: 0.7rem;
        margin-left: 0.2rem;
    }
    & > div {
        padding: 4rem;
    }
`
