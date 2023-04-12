import styled from "styled-components"

export const Skill = styled.div`
    margin: 3rem 0 0 0;
    & > div {
        font-size: 3rem;
        font-weight: 700;
    }
`

export const TechStack = styled.div`
    margin: 3rem auto 0;
    width: 45rem;
    height: 45rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`
export const Stack = styled.div`
    padding: 2rem;
    width: 49%;
    height: 49%;
    border-radius: 2rem;
    background-color: #ccc;
    background-size: contain;
    box-shadow: rgba(232, 232, 237, 0.25) 0px 5rem 10rem -2rem, rgba(124, 113, 113, 0.3) 0px 3rem 6rem -3rem,
        rgba(62, 66, 71, 0.35) 0 -0.2rem 0.6rem 0 inset;
    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    & > img:active {
        transition: all 0.5s;
        transform: scale(13);
        opacity: 0.1;
    }
`
