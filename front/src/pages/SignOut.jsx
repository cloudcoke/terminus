import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SignOutWrapSC } from "../component/signOut/styled"
import TypingEffect from "../component/Typing"
import { UserLogout } from "../store/user"

export const Signout = () => {
    const { userId } = useSelector((state) => state.user.data)
    const [logoutState, setLogoutState] = useState(false)
    const [typeState, setTypeState] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(UserLogout()).then((status) => {
        if (status === 200 && typeState) {
            setLogoutState(true)
            setTimeout(() => {
                navigate("/")
            }, 1000)
        }
    })
    return (
        <>
            <SignOutWrapSC>
                <TypingEffect text={"로그아웃이 정상적으로 처리되었습니다..."} speed={40} state={setTypeState} />
            </SignOutWrapSC>
        </>
    )
}
