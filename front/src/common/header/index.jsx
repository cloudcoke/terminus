import { useNavigate } from "react-router-dom"
import { Button, Toggle } from "../../component"
import { useDispatch, useSelector } from "react-redux"
import { Navi } from "./navigation"
import { BtnArea, HeaderWrap, Logo, ToggleArea } from "./styled"

export const Header = ({ List }) => {
    const { isLogin } = useSelector((state) => state.user)
    const navigator = useNavigate()
    const handleClick = () => {
        navigator("/")
    }

    return (
        <>
            <HeaderWrap>
                <Logo onClick={handleClick}>
                    <div />
                </Logo>
                {isLogin ? (
                    <BtnArea>
                        <Button text="profile" height="4" />
                        <Button text="Sign out" height="4" />
                    </BtnArea>
                ) : (
                    <BtnArea>
                        <Button text="Sign Up" height="4" />
                        <Button text="Sign In" height="4" />
                    </BtnArea>
                )}

                <ToggleArea>
                    <Toggle height="6" />
                </ToggleArea>
                <Navi List={List} />
                <ToggleArea className="btnWrap">
                    <Button text="Free Terminal" height="5" long />
                </ToggleArea>
            </HeaderWrap>
        </>
    )
}
