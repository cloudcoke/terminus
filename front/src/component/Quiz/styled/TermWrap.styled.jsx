import styled from "styled-components"

export const TermWrap = styled.div`
    width: 110rem;
    height: ${(props) => (props.height ? props.height + "%" : "100%")};
    font-size: 2rem;
    font-family: "D2Coding";
    .termi {
    }
    .xterm-viewport {
        background-color: #343541 !important;
    }
    & span {
        background-color: initial;
        width: 0.7rem;
        margin-left: 0.2rem;
    }
    & > div {
        padding: 3rem;
    }
`
