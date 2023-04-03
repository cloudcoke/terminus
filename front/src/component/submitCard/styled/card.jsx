import styled from "styled-components"
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border-radius: 5rem;
    height: 80%;
    padding: 5rem 3rem;
    & > h1 {
        margin: 0 0 0 5rem;
        font-size: 4rem;
    }
    & > h2 {
        text-align: end;
        font-size: 2rem;
    }
    & > h1,
    h2 {
        width: 100%;
        margin-top: 3rem;
        font-family: "EliceDigitalBaeum-Bd";
    }
`
