import { useState } from "react"
import { SignUpForm } from "../component"
import TypingEffect from "../component/Typing"

export const SignUp = () => {
    const [prompt, setPrompt] = useState(false)
    return (
        <>
            <div className="join">
                <h1>Sign Up</h1>
                <p className="content">
                    <TypingEffect
                        state={setPrompt}
                        text={
                            "Join our community of tech enthusiasts and enhance your Linux and MySQL skills with ease! Our site offers a unique platform for practicing and perfecting your command line skills.Sign up now and join the thousands of users who trust us to help them reach their full potential.Empower your career and take control of your tech future with just a few clicks.Sign up now and start your journey to becoming a Linux and MySQL master!"
                        }
                        speed={1}
                    />
                </p>
                <SignUpForm state={prompt} />
            </div>
        </>
    )
}
