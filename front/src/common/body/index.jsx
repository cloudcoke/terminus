import styled from "styled-components"

export const BodyWrap = styled.div`
    position: relative;
    width: 57%;
    height: 100%;
    color: #cccccc;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    & > * {
        scroll-snap-align: center;
    }
    .join {
        width: 100%;
        padding: 14.5% 20% 20% 4.5%;
        height: 100%;
        background-color: #242424;
    }
    h1 {
        font-size: 2.4rem;
        margin-bottom: 10rem;
    }
    .bashlogo {
        font-size: 1.8rem;
    }
    form > p,
    .content {
        line-height: 3rem;
        font-size: 1.8rem;
        word-break: keep-all;
    }
    form {
        margin-top: 3rem;
    }

    li {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        margin-top: 3rem;
    }

    input {
        color: #cccccc;
        font-size: 1.8rem;
        font-family: inherit;
        border: none;
        background-color: #00000000;
        padding-left: 1rem;
    }

    .userid {
        margin-left: 1rem;
    }
    span {
        display: inline-block;
        width: 1rem;
        height: 1.6rem;
    }
    & dl {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        margin-top: 2rem;
    }
    .warning {
        font-weight: bold;
        color: red;
    }
    .success {
        font-weight: bold;
        color: #05ff00;
    }
    dd {
        margin-left: 1rem;
        font-size: 1.8rem;
        color: #cccccc;
    }
`
