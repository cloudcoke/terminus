import { useState, useRef, memo } from "react"
import { useNavigate } from "react-router-dom"
import { RequestInput, useInput, UseKeyCheck } from "../../hooks"
import { useDispatch } from "react-redux"
import { SignInMessage } from "../message"
import TypingEffect from "../Typing"
import { UserLogin } from "../../store/user/action"

export const SignInForm = ({ state: prompt }) => {
    const dispatch = useDispatch()
    const signin = useRef(null)
    const userIdRef = useRef(null)
    const userPwRef = useRef(null)
    const submit = useRef(null)
    const submitFrm = useRef(null)
    const [idState, setIdState] = useState(false)
    const [pwState, setPwState] = useState(false)
    const [statusCode, setStatusCode] = useState(0)
    const [submitState, setSubmitState] = useState(false)
    const signInData = useInput("")
    const userIdData = useInput("")
    const userPwData = useInput("")
    const submitData = useInput("")
    const navigate = useNavigate()

    const handleIdState = (value) => {
        if (value === "Y" || value === "y") {
            setIdState(true)
            signin.current.disabled = true
        }
    }
    const handlePwState = (value) => {
        if (value) {
            setPwState(true)
            userIdRef.current.disabled = true
        }
    }
    const handleSubState = (value) => {
        if (value) {
            setSubmitState(true)
            userPwRef.current.disabled = true
        }
    }
    const handleSubmit = async (value) => {
        if (value === "Y" || value === "y") {
            const userId = userIdRef.current.value
            const userPw = userPwRef.current.value
            const status = await dispatch(UserLogin({ userId, userPw }))
            if (status === 200) {
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            } else if (status >= 400) {
                setPwState("")
                setSubmitState("")
                userIdRef.current.disabled = false
                userPwRef.current.disabled = false
            }
            setStatusCode(status)
        }
        if (value === "N" || value === "n") {
            setPwState("")
            setSubmitState("")
            userIdRef.current.disabled = false
            userPwRef.current.disabled = false
        }
    }

    return (
        <form
            autoComplete="off"
            onSubmit={(e) => {
                e.preventDefault()
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
                                onKeyDown={(e) => handleIdState(UseKeyCheck(e))}
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
                                onKeyDown={(e) => handlePwState(RequestInput(e))}
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
                                onKeyDown={(e) => handleSubState(RequestInput(e))}
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
            <SignInMessage statusCode={statusCode} />
            <br />
            <br />
            <br />
        </form>
    )
}
