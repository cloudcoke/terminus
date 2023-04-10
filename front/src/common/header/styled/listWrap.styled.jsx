import styled from "styled-components"

export const Ul = styled.ul`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: "Youth";
    font-weight: bold;
    letter-spacing: 0.5rem;
    & + & {
        margin-top: 2rem;
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        cursor: pointer;
    }
    h2::before {
        content: "►";
        margin-right: 1rem;
    }
    .off {
        display: none;
    }
    li {
        margin: 1rem 0 0 3rem;
        font-size: 1.8rem;
    }
    li::before {
        content: "☉";
        margin-right: 1rem;
    }
    a {
        color: #000;
    }
`
