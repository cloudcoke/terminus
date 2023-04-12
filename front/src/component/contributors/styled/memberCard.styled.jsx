import styled from "styled-components"
import githubIcon from "../../../image/github.png"
import mailIcon from "../../../image/mail.png"
import blogIcon from "../../../image/blog.png"

export const MemberWrap = styled.div`
    display: flex;
    height: 100%;
    margin: 0 auto;
    align-items: center;
`
export const MemberPosition = styled.dt`
    min-width: 14rem;
    padding: 0.5rem;
    text-align: center;
    transform: rotate(-90deg);
    text-transform: uppercase;
    color: #ccc;
    letter-spacing: 0.1rem;
    font-size: 2rem;
    font-weight: 500;
    transition: all 0.5s ease-in-out;
`

export const MemberContent = styled.dd`
    display: flex;
    justify-content: center;
    opacity: 0;
    width: 0;
    height: 0;
    padding: 1rem 0 0 0;
    transition: all 0.5s ease-in-out;

    &:nth-child(3) {
        border-top: 1px solid #ccc;

        justify-content: space-between;
    }
    & > p {
        width: 5rem;
        height: 5rem;
        border-radius: 2.5rem;
        background-position: 50% 50%;
        background-size: 85% 85%;
        background-repeat: no-repeat;
    }
    & > p:hover {
        background-color: #cccccc57;
    }
    & > p:nth-child(1) {
        background-image: url(${blogIcon});
    }
    & > p:nth-child(2) {
        background-image: url(${githubIcon});
    }
    & > p:nth-child(3) {
        background-image: url(${mailIcon});
    }
    & > p > a {
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: pink;
    }
`

export const MemberCardWrap = styled.div`
    height: 50%;
    display: flex;
`

export const MemberCard = styled.dl`
    width: 13rem;
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: all 0.5s ease-in-out;

    &:hover > dt {
        margin-bottom: 3rem;
    }
    &:hover {
        width: 33rem;
        transition: all 0.5s ease-in-out;
    }

    &:hover > ${MemberPosition} {
        transform: rotate(0);
        transition: all 0.5s ease-in-out;
    }

    &:hover > ${MemberContent} {
        width: 70%;
        margin: 0;
        height: 5rem;
        opacity: 1;
        transition: all 0.5s ease-in-out;
    }
`
