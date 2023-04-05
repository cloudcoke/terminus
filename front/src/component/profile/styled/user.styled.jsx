import styled from "styled-components"

export const USER = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    height: 10%;
    font-size: 1.6rem;
    padding: 0 5rem;
    color: #434343;
    & > div + div {
        margin-left: 2rem;
    }
    & > div {
        height: 80%;
        display: flex;
        align-items: flex-end;
    }
    & > div:nth-child(1) {
        line-height: 2.2rem;
        font-size: 2.6rem;
    }
`
