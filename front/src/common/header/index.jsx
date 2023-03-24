import { Button, Toggle } from "../../component"
import { Navi } from "./navigation"
import { BtnArea, HeaderWrap, Logo, ToggleArea } from "./styled"

export const Header = () => {
    return (
        <>
            <HeaderWrap>
                <Logo />
                <BtnArea>
                    <Button text="Sign Up" height="4" />
                    <Button text="Sign In" height="4" />
                </BtnArea>
                <ToggleArea>
                    <Toggle height="6" />
                </ToggleArea>
                <Navi />
                <ToggleArea className="btnWrap">
                    <Button text="Free Terminal" height="5" long />
                </ToggleArea>
            </HeaderWrap>
        </>
    )
}
