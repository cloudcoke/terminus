import { Routes, Route } from "react-router-dom"
import { SignIn, SignUp, Main } from "../pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
        </>
    )
}
