import styled from "styled-components"

export const CardWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #9c45452e;

    /* filter: blur(4px); */
`
export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50rem;
    height: 75rem;
    border-radius: 5rem;
    background-color: #1a5454;
    & > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
    }
`
