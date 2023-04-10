import { Routes, Route } from "react-router-dom"
import { SignIn, SignUp, Main, FreeTerm, Signout, Contributors, Profile } from "../pages"
import { BodyRoute } from "./BodyRoute"

export const AppRouter = ({ List, socket }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/signout" element={<Signout />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/quiz/*" element={<BodyRoute list={List} socket={socket} />} />
            </Routes>
        </>
    )
}
