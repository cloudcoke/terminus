import styled, { keyframes } from "styled-components"

const barAni = keyframes`
    0%{
        width: 0%;
    }
    100%{
    width: calc((${(props) => props.point} / 600) * 100%);
    }
`
export const RankWarp = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    & > div {
        display: flex;
        width: 100%;
        height: calc(100% / 3);
        justify-content: center;
        align-items: center;
        padding: 1.5rem 3rem;
        font-size: 2rem;
    }
    & > div > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: calc(100% / 3);
    }
`
export const Graph = styled.div`
    width: 70%;
    height: 100%;
    & > div {
        display: flex;
        width: 100%;
        height: calc(100% / 3);
        justify-content: flex-start;
        align-items: center;
        font-size: 4rem;
        padding: 3rem;
    }
    .backgroundBar {
        width: 100%;
        background-color: #8f8f8f;
        height: 100%;
        border-radius: 2rem;
    }
`
export const Bar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: calc((${(props) => props.point} / 600) * 100%);
    padding: 0.7rem 1.4rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    animation: ${(props) => (props.rank === true ? barAni : "")} 2s ease-in-out;
    animation-fill-mode: both;
    background-color: #454343;
`
