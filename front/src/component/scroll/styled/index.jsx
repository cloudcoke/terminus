import styled, { keyframes } from "styled-components"

const wheel = keyframes`
    0% {
            transform: translate(0, 0);
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
        80% {
            transform: translate(0, 20px);
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
`

export const ScrollSt = styled.div`
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 85%;
    left: calc(50% - 2.5rem);
    font-size: 1.8rem;
    text-align: center;
    ul {
        width: 5rem;
        position: absolute;
    }
    li {
        display: inline-block;
        margin-top: 6rem;
    }
    ul span {
        background-color: #ffffff00;
        position: absolute;
        top: 0;
        left: 50%;
        width: 3rem;
        height: 5rem;
        margin-left: -1.5rem;
        border: 2px solid #fff;
        border-radius: 50px;
        box-sizing: border-box;
    }
    ul span::before {
        position: absolute;
        top: 1rem;
        left: 50%;
        content: "";
        width: 0.6rem;
        height: 0.6rem;
        margin-left: -0.3rem;
        background-color: #fff;
        border-radius: 100%;
        animation: ${wheel} 2s infinite;
        box-sizing: border-box;
    }
`
