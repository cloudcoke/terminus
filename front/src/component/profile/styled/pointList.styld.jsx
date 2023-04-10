import styled from "styled-components"

export const PointList = styled.div`
    margin: 2rem auto 4rem;
    width: 80%;
    height: 50%;
    border-radius: 2rem;
    padding: 2rem;
    border: 3px #fff solid;
    overflow-y: scroll;
    border-style: groove;
    font-family: "Youth";
`

export const PointUlistSC = styled.ul`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export const PointListSC = styled.li`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #444;
    &:nth-child(1) {
        margin: 0 10rem 0 0;
        justify-content: center;
        width: 17.2rem;
        height: 100%;
    }
    &:nth-child(2) {
        margin-top: 0;
        justify-content: flex-end;
        padding-right: 2rem;
        width: 11.7rem;
        ${(props) =>
            props.color === "PointUp"
                ? "color : #1a5454"
                : props.color === "PointDouwn"
                ? "color : #d6450c"
                : props.color};
        height: 100%;
        letter-spacing: 0.2rem;
    }
    &:nth-child(3) {
        margin-top: 0;
        width: 11.7rem;
        height: 100%;
        justify-content: center;
        ${(props) =>
            props.color === "PointUp"
                ? "color : #1a5454"
                : props.color === "PointDown"
                ? "color : #d6450c"
                : props.color};
    }
    & > p {
        font-size: 2.5rem;
    }
`
