import { useState } from "react"
import BashLogo from "../component/logo"
import TypingEffect from "../component/Typing"

export const SignIn = () => {
    const [logoState, setLogoState] = useState(false)
    const [prompt, setPrompt] = useState(false)
    console.log(logoState, prompt)

    return (
        <>
            <div className="join">
                <h1>Sign In</h1>
                <div className="bashlogo">
                    <BashLogo state={setLogoState} />
                    <br />
                    <br />
                    <div className="content">
                        {logoState && (
                            <TypingEffect
                                state={setPrompt}
                                text={
                                    "Welcome to our site, where you can learn and master the most useful Linux and MySQL commands. Our site provides a comprehensive platform for anyone interested in improving their skills in these areas. Whether you are a beginner or an experienced user, our site has something to offer for everyone. So, let's get started and enhance your knowledge and skills today!"
                                }
                                speed={10}
                            />
                        )}
                    </div>
                </div>
                <form autoComplete="off" action="32">
                    {prompt && (
                        <li>
                            &gt; "Enter Your UserId:
                            <input type="text" className="userId" />
                        </li>
                    )}
                    <dl>
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
                    </li>
                </form>
            </div>
        </>
    )
}
