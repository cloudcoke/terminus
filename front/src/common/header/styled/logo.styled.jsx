import styled from "styled-components"
import logo from "../../../image/logo.png"

export const Logo = styled.h1`
    width: 100%;
    height: 17%;
    & > div {
        width: 100%;
        height: 100%;
        background-image: url(${logo});
        background-size: 100%;
        background-repeat: no-repeat;
    }
`
