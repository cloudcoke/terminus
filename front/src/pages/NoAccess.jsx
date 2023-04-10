import styled from "styled-components"
import logo from "../image/logo.png"

export const NoAccess = () => {
    const NoAccessWrap = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const TextWrap = styled.div`
        position: absolute;
        bottom: 10rem;
        text-align: center;
        width: 70%;
        & > div {
            margin-top: 2rem;
            font-size: 3rem;
            font-weight: bold;
            color: #ccc;
        }
    `
    const NoAccessLogo = styled.h1`
        width: 100%;
        height: 10%;
        background-image: url(${logo});
        background-size: 100%;
        background-position: 45% 50%;
        background-repeat: no-repeat;
    `
    return (
        <>
            <NoAccessWrap>
                <NoAccessLogo />
                <TextWrap>
                    <div>현재 `Terminus`는 </div>
                    <div>PC버전 및 가로 모드에서만</div>
                    <div>이용 가능합니다.</div>
                </TextWrap>
            </NoAccessWrap>
        </>
    )
}
