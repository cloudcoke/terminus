import styled from "styled-components"

export const PromptWrap = styled.div`
    width: 100%;
    height: 30%;
    background-color: #242424;
    font-size: 1.8rem;
    padding: 4rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    & > .wwwrap {
        overflow-y: scroll;
        width: 100%;
    }
    .option + .option {
        margin-top: 2rem;
    }
    & > .option {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .option > div + div {
        margin-top: 1rem;
    }
`
