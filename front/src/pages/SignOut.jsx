import { useDispatch, useSelector } from "react-redux"
import { UserLogout } from "../store/user"

export const Signout = async () => {
    const { userId } = useSelector((state) => state.user.data)
    const dispatch = useDispatch()

    const status = await dispatch(UserLogout(userId))
    console.log(status)

    return <></>
}
