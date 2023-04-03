import styled, { keyframes } from "styled-components"

export const SlotWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;

    .reel {
        display: flex;
        justify-content: flex-end;
        font-size: 8rem;
        color: orange;
        margin-top: 4rem;
        & > span {
            display: flex;
            justify-content: end;
            flex-direction: column;
            width: fit-content;
            height: 10rem;
            font-size: 3rem;
            margin: 0;
            background-color: initial;
        }
    }
`
