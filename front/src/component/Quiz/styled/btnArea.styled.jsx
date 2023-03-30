import styled from "styled-components"

export const BtnWrap = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CenterBtn = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div + div {
        margin-left: 3rem;
    }
`
