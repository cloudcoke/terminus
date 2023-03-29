import styled from "styled-components"

export const ToggleWrap = styled.div`
    width: ${(props) => props.height * 2.5 + "rem"};
    height: ${(props) => props.height + "rem"};
    position: relative;
    display: inline-block;
`
export const ToggleInput = styled.input`
    display: none;
`

export const ToggleLabel = styled.label`
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    transform: translateY(-50%);
    cursor: pointer;
    &::before,
    &::after {
        position: absolute;
        border-radius: 50px;
        box-sizing: border-box;
        transition: 0.5s ease all;
    }
    &::before {
        content: "";
        top: 0.5rem;
        left: 0.7rem;
        width: 5rem;
        border: 2px solid #103445;
        height: 5rem;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
            rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
            rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
            rgba(0, 0, 0, 0.09) 0px 20px 16px;
    }
    &::after {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 2.4rem;
        content: "Linux";
        padding-right: 2rem;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #103445;
        box-shadow: none;
    }

    #toggle_checkbox:checked + &::before {
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 2.2rem;
        content: "MySQL";
        padding-left: 2rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #103445;
        box-shadow: none;
    }

    #toggle_checkbox:checked + &::after {
        content: "";
        top: 0.5rem;
        right: 0.7rem;
        width: 5rem;
        height: 5rem;
        border: 2px solid #103445;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
            rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
            rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
            rgba(0, 0, 0, 0.09) 0px 20px 16px;
    }
`
