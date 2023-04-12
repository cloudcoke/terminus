import styled from "styled-components"
export const CircleSC = styled.div`
    display: flex;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 5px solid #ccc;
    justify-content: center;
    align-items: center;
    color: #ccc;
    /* color: #1f1f11; */
    font-size: 3rem;
    & + & {
        margin-left: 10rem;
    }
    &:active {
        border: 5px solid #ccc;
        color: #ccc;
    }
    &:hover {
        background-color: #ccc;
        color: #1f1f1f;
        cursor: pointer;
    }
`
