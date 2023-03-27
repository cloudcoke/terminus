import { useState } from "react"
// import request from "../../utils/request"
import { SignUpMessage } from "../message"
import TypingEffect from "../Typing"

export const SignUpForm = ({ state: prompt }) => {
    const [isIdDuplicates, setIsIdDuplicates] = useState(false)
    // const [isPwDuplicates, setIsPwDuplicates] = useState(false)
    const [formState, setFormState] = useState({
        mode: "",
        userId: "",
        userPw: "",
        userPwCheck: "",
        submit: "",
    })
    console.log(formState)
    const checkKeyCode = async (e) => {
        if (e.key === "Enter") {
            if (e.target.className === "mode") {
                switch (e.target.value.toUpperCase()) {
                    case "Y":
                        return handleChange(e)
                    default:
                        break
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
                            return null
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
    console.log(isIdDuplicates)
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
        </form>
    )
}
