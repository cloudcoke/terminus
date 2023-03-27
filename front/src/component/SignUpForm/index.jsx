import { useState } from "react"
import TypingEffect from "../Typing"

export const SignUpForm = ({ state: prompt }) => {
    const [stateCode, setStateCode] = useState(0)
    const [formState, setFormState] = useState({
        mode: "",
        userId: "",
        userPw: "",
        userPwCheck: "",
        submit: "",
    })
    const checkKeyCode = (e) => {
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
                    // axios
                    //체크하는 로직 안에 handle chane넣어서 3단계로 바꾸자..
                    // return handleChange(e)
                    default:
                        break
                }
            }
        }
    }
    const handleChange = (e) => {
        setFormState((initial) => ({
            ...initial,
            [e.target.className]: e.target.value,
        }))
        e.target.disabled = true
    }
    console.log(formState)
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
            {formState.userId && (
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
            {/* <dl>
                <dt>WARNING :</dt>
                <dd>UserId ‘sampleId’ is already exists.</dd>
            </dl>
            <li>
                &gt; "Enter Your Password:
                <input type="text" className="userPw" />
            </li>
            <li>
                &gt; "Enter Your Password again:
                <input type="text" className="userPwCheck" />
            </li> */}
        </form>
    )
}
