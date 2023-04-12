import styled from "styled-components";

export const List = styled.div`
    width: 100%;
    height: min-content;
    padding: 1.5rem;
    box-sizing: border-box;
    font-family: "SCoreDream";

    & > .p {
        display: flex;
        width: 100%;
        height: 4rem;
        font-size: 2rem;
        font-weight: bold;
        justify-content: space-between;
    }

    & > .p > div > .date {
        font-weight: 300;
        margin-left: 2rem;
        width: 30rem !important;
        height: 4rem !important;
        font-size: 1rem;
    }

    & > .p > div > span {
        font-weight: 400;
        width: 5rem !important;
        height: 4rem !important;
        font-size: 1.4rem;
    }

    & > span {
        display: block !important;
        width: 100% !important;
        height: min-content !important;
        font-size: 1.6rem;
    }

    &:nth-child(2n) {
        background-color: #313131 !important;
    }

    & + & {
        border-top: 0.1rem dashed #ccc;
    }
`;

export const DivWrap = styled.div`
    width: 100%;
    height: 30rem;
    overflow-y: scroll !important;
`;

