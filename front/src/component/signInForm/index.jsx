import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { RequestInput, useInput, UseKeyCheck } from "../../hooks"
import { Message } from "../message"
import TypingEffect from "../Typing"

export const SignInForm = ({ state: prompt }) => {
    const signin = useRef(null)
    const userIdRef = useRef(null)
    const userPwRef = useRef(null)
    const submit = useRef(null)
    const submitFrm = useRef(null)
    const [idState, setIdState] = useState(false)
    const [pwState, setPwState] = useState(false)
    const [submitState, setSubmitState] = useState(false)
    const signInData = useInput("")
    const userIdData = useInput("")
    const userPwData = useInput("")
    const submitData = useInput("")
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target

        switch (name) {
            case "userId":
                setIdState(value.toLowerCase() === "y")
                signin.current.disabled = value.toLowerCase() === "y"
                break
            case "userPw":
                setPwState(!!value)
                userIdRef.current.disabled = !!value
                break
            case "submit":
                setSubmitState(!!value)
                userPwRef.current.disabled = !!value
                break
            default:
                break
        }
    }

    const handleSubmit = (value) => {
        if (value === "Y" || value === "y") {
            const userId = userIdRef.current.value
            const userPw = userPwRef.current.value
            console.dir(submitFrm)
            console.log(userId, userPw, submitFrm)
            const response = { status: 200 }
            if (response.status === 200) {
                const message = Message(response.status)
                setTimeout(() => {
                    // navigate("/")
                }, 1000)
            }
        }
    }
    return (
        <form
            autoComplete="off"
            onSubmit={(e) => {
                e.preventDefault()
                console.log(e.target, "submit 성공")
            }}
            ref={submitFrm}
        >
            {prompt && (
                <TypingEffect
                    text={`> Enter login mode? [Y/N] :`}
                    element={
                        <>
                            <input
                                type="text"
                                autoFocus
                                ref={signin}
                                {...signInData}
                                onKeyDown={(e) => handleInputChange(UseKeyCheck(e))}
                            />
                        </>
                    }
                />
            )}
            {idState && (
                <TypingEffect
                    text={`> Enter Your UserId : `}
                    element={
                        <>
                            <input
                                type="text"
                                ref={userIdRef}
                                className="userId"
                                autoFocus
                                {...userIdData}
                                onKeyDown={(e) => handleInputChange(RequestInput(e))}
                            />
                        </>
                    }
                />
            )}
            {pwState && (
                <TypingEffect
                    text={`> Enter Your UserPw : `}
                    element={
                        <>
                            <input
                                type="password"
                                className="userPw"
                                ref={userPwRef}
                                autoFocus
                                {...userPwData}
                                onKeyDown={(e) => handleInputChange(RequestInput(e))}
                            />
                        </>
                    }
                />
            )}
            {submitState && (
                <TypingEffect
                    text={`> Are you ready to login? [Y/N] : `}
                    element={
                        <>
                            <input
                                type="text"
                                className="submit"
                                ref={submit}
                                autoFocus
                                {...submitData}
                                onKeyDown={(e) => handleSubmit(RequestInput(e))}
                            />
                        </>
                    }
                />
            )}
        </form>
    )
}
