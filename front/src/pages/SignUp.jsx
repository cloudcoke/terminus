import TypingEffect from "../component/Typing"

export const SignUp = () => {
    return (
        <>
            <div className="join">
                <h1>Sign Up</h1>
                <p className="content">
                    <TypingEffect
                        text={
                            "Join our community of tech enthusiasts and enhance your Linux and MySQL skills with ease! Our site offers a unique platform for practicing and perfecting your command line skills.Sign up now and join the thousands of users who trust us to help them reach their full potential.Empower your career and take control of your tech future with just a few clicks.Sign up now and start your journey to becoming a Linux and MySQL master!"
                        }
                        speed={50}
                    />
                </p>
                <form action="1" autoComplete="off">
                    <li>
                        &gt; "Enter Your UserId:
                        <input type="text" className="userId" />
                    </li>
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
