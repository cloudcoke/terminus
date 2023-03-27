import { useNavigate } from "react-router-dom"
import { Button, Toggle } from "../../component"
import { UserLogout } from "../../store/user"
import { useDispatch } from "react-redux"
import { Navi } from "./navigation"
import { BtnArea, HeaderWrap, Logo, ToggleArea } from "./styled"

export const Header = ({ List }) => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const handleClick = () => {
        navigator("/")
    }
    // const handleLogout = () => {
    //     dispatch(UserLogout())
    // }
    return (
        <>
            <HeaderWrap>
                <Logo onClick={handleClick} />
                <BtnArea>
                    <Button text="Sign Up" height="4" />
                    <Button text="Sign In" height="4" />
                </BtnArea>
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
