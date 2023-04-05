import { Routes, Route } from "react-router-dom"
import { SignIn, SignUp, Main, FreeTerm, Signout, Contributors } from "../pages"
import { BodyRoute } from "./BodyRoute"

export const AppRouter = ({ List }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/signout" element={<Signout />}></Route>
                <Route path="/freeterminal" element={<FreeTerm />}></Route>
                <Route path="/quiz/*" element={<BodyRoute list={List} />} />
                <Route path="/contributors" element={<Contributors />} />
            </Routes>
        </>
    )
}
