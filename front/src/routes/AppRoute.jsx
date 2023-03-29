import { Routes, Route } from "react-router-dom"
import { SignIn, SignUp, Main, FreeTerm } from "../pages"
import { BodyRoute } from "./BodyRoute"

export const AppRouter = ({ List }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/freeterminal" element={<FreeTerm />}></Route>
                <Route path="/quiz/*" element={<BodyRoute list={List} />} />
            </Routes>
        </>
    )
}
