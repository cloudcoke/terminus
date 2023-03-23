import styled from "styled-components"

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 4rem 0 0 10rem;
    & + & {
        margin-bottom: 2rem;
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    h2::before {
        content: "►";
        margin-right: 1rem;
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
