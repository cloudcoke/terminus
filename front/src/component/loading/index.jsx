import styled, { keyframes } from "styled-components"

const pulsate = keyframes`
  0%, 40%, 100% {
    transform: scale(0.2);
  }
  20% {
    transform: scale(0.6);
  }
`

const Ul = styled.ul`
    width: 100%;
    height: 100%;
    /* transform: translate(-50%, -50%); */
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
    background-color: #343541;
`

const Li = styled.li`
    list-style: none;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    animation: ${pulsate} 1.6s ease-in-out infinite;

    &:nth-child(1) {
        animation-delay: -1.4s;
        background: #999;
        box-shadow: 0 0 3rem #999;
    }

    &:nth-child(2) {
        animation-delay: -1.2s;
        background: #aaa;
        box-shadow: 0 0 3rem #aaa;
    }
    &:nth-child(3) {
        animation-delay: -1s;
        background: #bbb;
        box-shadow: 0 0 3rem #bbb;
    }
    &:nth-child(4) {
        animation-delay: -0.8s;
        background: #ccc;
        box-shadow: 0 0 3rem #ccc;
    }
    &:nth-child(5) {
        animation-delay: -0.6s;
        background: #ddd;
        box-shadow: 0 0 3rem #ddd;
    }
    &:nth-child(6) {
        animation-delay: -0.4s;
        background: #eee;
        box-shadow: 0 0 3rem #eee;
    }
    &:nth-child(7) {
        animation-delay: -0.2s;
        background: #fff;
        box-shadow: 0 0 3rem #fff;
    }
`

export const Loading = () => {
    return (
        <Ul>
            <Li />
            <Li />
            <Li />
            <Li />
            <Li />
            <Li />
            <Li />
        </Ul>
    )
}
