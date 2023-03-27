import { useState } from "react"
import BashLogo from "../component/bashlogo"
import { SignInForm } from "../component/signInForm"
import TypingEffect from "../component/Typing"

export const SignIn = () => {
    const [logoState, setLogoState] = useState(false)
    const [prompt, setPrompt] = useState(false)

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
                                speed={5}
                            />
                        )}
                    </div>
                </div>
                <SignInForm state={prompt} />
            </div>
        </>
    )
}
