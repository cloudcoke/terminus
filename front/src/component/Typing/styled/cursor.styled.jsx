import styled, { keyframes } from "styled-components"

const blinkCursor = keyframes`
  50% {
    opacity: 0;
  }
`
export const StyledCursor = styled.span`
    display: inline-block;
    margin-left: 4px;
    width: 10px;
    height: 16px;
    background-color: black;
    animation: ${blinkCursor} 0.5s infinite;
`
