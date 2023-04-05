import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { UserLogout } from "../store/user"

export const Signout = () => {
    // const { userId } = useSelector((state) => state.user.data)
    const [logoutState, setLogoutState] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(UserLogout()).then((status) => {
        if (status === 200) {
            setLogoutState(true)
            setTimeout(() => {
                navigate("/")
            }, 1000)
        }
    })

    return <>{logoutState && <>로그아웃 처리가 완료 되었습니다.</>}</>
}
