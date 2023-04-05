import styled, { keyframes } from "styled-components"

const pulsate = keyframes`
  0%, 40%, 100% {
    transform: scale(0.2);
  }
  20% {
    transform: scale(0.4);
  }
`

const Ul = styled.ul`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
    background-color: #242424;
`

const Li = styled.li`
    position: relative;
    list-style: none;
    width: 4rem;
    height: 9rem;
    animation: ${pulsate} 1.8s ease-in-out infinite;

    & + & {
        margin-left: 3rem;
    }

    &:nth-child(1) {
        animation-delay: -1.6s;
        background: #999;
        box-shadow: 0 0 3rem #999;
    }

    &:nth-child(2) {
        animation-delay: -1.4s;
        background: #aaa;
        box-shadow: 0 0 3rem #aaa;
    }
    &:nth-child(3) {
        animation-delay: -1.2s;
        background: #bbb;
        box-shadow: 0 0 3rem #bbb;
    }
    &:nth-child(4) {
        animation-delay: -1s;
        background: #ccc;
        box-shadow: 0 0 3rem #ccc;
    }
    &:nth-child(5) {
        animation-delay: -0.8s;
        background: #ddd;
        box-shadow: 0 0 3rem #ddd;
    }
    &:nth-child(6) {
        animation-delay: -0.6s;
        background: #eee;
        box-shadow: 0 0 3rem #eee;
    }
    &:nth-child(7) {
        animation-delay: -0.4s;
        background: #fff;
        box-shadow: 0 0 3rem #fff;
    }
    &:nth-child(8) {
        animation-delay: -0.2s;
        background: #fff;
        box-shadow: 0 0 3rem #fff;
    }
    & > p {
        position: absolute;
        top: -30rem;
        left: calc(50% - 6rem);
        font-size: 20rem;
    }
`

export const Loading = () => {
    return (
        <Ul>
            <Li>
                <p>T</p>
            </Li>
            <Li>
                <p>e</p>
            </Li>
            <Li>
                <p>r</p>
            </Li>
            <Li>
                <p>m</p>
            </Li>
            <Li>
                <p>i</p>
            </Li>
            <Li>
                <p>n</p>
            </Li>
            <Li>
                <p>u</p>
            </Li>
            <Li>
                <p>s</p>
            </Li>
        </Ul>
    )
}
