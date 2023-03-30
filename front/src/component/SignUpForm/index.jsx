import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import request from "../../utils/request"
import { SignUpMessage } from "../message"
import TypingEffect from "../Typing"

export const SignUpForm = ({ state: prompt }) => {
    const [isIdDuplicates, setIsIdDuplicates] = useState(false)
    const [isPwDuplicates, setIsPwDuplicates] = useState(false)
    const navigator = useNavigate()
    const [formState, setFormState] = useState({
        mode: "",
        userId: "",
        userPw: "",
        userPwCheck: "",
        submit: "",
    })
    const checkKeyCode = async (e) => {
        if (e.key === "Enter") {
            if (e.target.className === "mode" || e.target.className === "submit") {
                switch (e.target.value.toUpperCase()) {
                    case "Y":
                        handleChange(e)
                        break
                    default:
                        break
                }
                if (e.target.className === "submit") {
                    navigator("/")
                }
            }
            if (e.target.className === "userId") {
                switch (/^[a-zA-Z0-9]*$/.test(e.target.value)) {
                    case true:
                        try {
                            // const result = await request.post("/user/check", { userId: e.target.value })
                            // const { isCheck } = result.data

                            // const stateCode = request.data.status
                            const isDuplicates = true

                            setIsIdDuplicates(isDuplicates)
                            handleChange(e)
                        } catch (error) {
                            return error
                        }
                        break
                    default:
                        break
                }
            }
            if (e.target.className === "userPw") {
                handleChange(e)
            }
            if (e.target.className === "userPwCheck") {
                handleChange(e)
                if (formState.userPwCheck && formState.userPw === formState.userPwCheck) {
                    setFormState(true)
                }
            }
        }
    }
    const handleChange = (e) => {
        if (e.target.className === "userId") {
            if (isIdDuplicates === true) {
                setFormState((initial) => ({
                    ...initial,
                    [e.target.className]: e.target.value,
                }))
                e.target.disabled = true
            } else {
                setFormState((initial) => ({
                    ...initial,
                    [e.target.className]: e.target.value,
                }))
            }
        } else {
            setFormState((initial) => ({
                ...initial,
                [e.target.className]: e.target.value,
            }))
        }
    }
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
            {(formState.mode === "Y" || formState.mode === "y") && (
                <TypingEffect
                    text={` > Enter Your UserId: `}
                    element={
                        <input
                            type="text"
                            className="userId"
                            // value={formState.userId}
                            autoFocus
                            onKeyDown={checkKeyCode}
                            pattern="^[a-zA-Z0-9]+$"
                        />
                    }
                />
            )}
            <SignUpMessage isIdDuplicates={isIdDuplicates} userId={formState.userId} />
            {formState.userId && isIdDuplicates && (
                <TypingEffect
                    text={` > Enter Your Password: `}
                    element={
                        <input
                            type="password"
                            className="userPw"
                            autoFocus
                            onKeyDown={checkKeyCode}
                            pattern="^[a-zA-Z0-9]+$"
                        />
                    }
                />
            )}
            {formState.userPw && (
                <TypingEffect
                    text={` > Enter Your Password again: `}
                    element={
                        <input
                            type="password"
                            className="userPwCheck"
                            autoFocus
                            onKeyDown={checkKeyCode}
                            pattern="^[a-zA-Z0-9]+$"
                        />
                    }
                />
            )}
            <SignUpMessage userPw={formState.userPw} userPwCheck={formState.userPwCheck} />
            {formState.userPwCheck && formState.userPw === formState.userPwCheck && (
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
