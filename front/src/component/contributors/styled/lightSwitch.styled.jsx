import styled from "styled-components"
import onImg from "../../../image/on.png"
import offImg from "../../../image/off.png"

export const LightSwitch = styled.div`
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    width: 8rem !important;
    height: 8rem;
    border-radius: 4rem;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: ${(prop) => (prop.lightState ? `url(${onImg})` : `url(${offImg})`)};
`
