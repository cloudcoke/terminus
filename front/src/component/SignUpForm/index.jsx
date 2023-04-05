import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { UserSignUp } from "../../store/user/action"
import request from "../../utils/request"
import { SignUpMessage } from "../message"
import TypingEffect from "../Typing"

export const SignUpForm = ({ state: prompt }) => {
    const [isIdDuplicates, setIsIdDuplicates] = useState(false)
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const [formState, setFormState] = useState({
        mode: "",
        userId: "",
        userPw: "",
        userPwCheck: "",
        submit: "",
    })
    const { mode, userId, userPw, userPwCheck } = formState

    const checkKeyCode = (e) => {
        if (e.key === "Enter") {
            switch (e.target.className) {
                case "mode":
                case "submit":
                    handleModeSubmit(e)
                    break
                case "userId":
                    handleUserIdChange(e)
                    break
                case "userPw":
                    handleUserPwChange(e)
                    break
                case "userPwCheck":
                    handleUserPwCheckChange(e)
                    break
                default:
                    break
            }
        }
    }

    const handleModeSubmit = (e) => {
        const { value, className } = e.target
        if (value.toUpperCase() === "Y") {
            e.target.disabled = true
            handleChange("mode", e)
        }
        if (className === "submit") {
            dispatch(
                UserSignUp({
                    userId: formState.userId,
                    userPw: formState.userPw,
                })
            ).then((status) => {
                if (status === 200) {
                    navigator("/")
                }
            })
        }
    }

    const handleUserIdChange = async (e) => {
        const { value } = e.target

        switch (/^[a-zA-Z0-9]*$/.test(value)) {
            case true:
                const result = await request.post("/user/check", { userId: value })
                const data = result.data.data
                console.log(data)
                if (data === true) {
                    e.target.disabled = true
                    setIsIdDuplicates(true)
                    handleChange("userId", e)
                } else {
                    setIsIdDuplicates(false)
                    handleChange("userId", e)
                }
                break
            default:
                break
        }
    }
    const handleUserPwChange = (e) => {
        handleChange("userPw", e)
    }

    const handleUserPwCheckChange = (e) => {
        handleChange("userPwCheck", e)
    }

    const handleChange = (target, e) => {
        setFormState((prev) => ({ ...prev, [target]: e.target.value }))
    }

    //
    //
    //

    //리턴
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            autoComplete="off"
        >
            {prompt && (
                <TypingEffect
                    text={`> Enter Sign Up mode? [Y/N] :`}
                    element={
                        <>
                            <input type="text" className="mode" autoFocus onKeyDown={checkKeyCode} />
                        </>
                    }
                />
            )}
            {(mode === "Y" || mode === "y") && (
                <TypingEffect
                    text={` > Enter Your UserId: `}
                    element={
                        <input
                            type="text"
                            className="userId"
                            autoFocus
                            onKeyDown={checkKeyCode}
                            pattern="^[a-zA-Z0-9]+$"
                        />
                    }
                />
            )}
            <SignUpMessage isIdDuplicates={isIdDuplicates} userId={userId} />
            {userId && isIdDuplicates && (
                <TypingEffect
                    text={` > Enter Your Password: `}
                    element={
                        <input
                            type="password"
                            className="userPw"
                            autoFocus
                            onKeyDown={checkKeyCode}
                            pattern="^[a-zA-Z0-9]+$"
                            disabled={userPwCheck && userPw === userPwCheck}
                        />
                    }
                />
            )}
            {userPw && (
                <TypingEffect
                    text={` > Enter Your Password again: `}
                    element={
                        <input
                            type="password"
                            className="userPwCheck"
                            autoFocus
                            onKeyDown={checkKeyCode}
                            pattern="^[a-zA-Z0-9]+$"
                            disabled={userPwCheck && userPw === userPwCheck}
                        />
                    }
                />
            )}
            <SignUpMessage userPw={userPw} userPwCheck={userPwCheck} />
            {userPwCheck && userPw === userPwCheck && (
                <TypingEffect
                    text={` > Are you Submit ? [Y/N] :`}
                    element={
                        <input
                            type="text"
                            className="submit"
                            autoFocus
                            onKeyDown={checkKeyCode}
                            pattern="^[a-zA-Z0-9]+$"
                        />
                    }
                />
            )}
        </form>
    )
}
