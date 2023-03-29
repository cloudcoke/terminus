import { Routes, Route } from "react-router-dom"
import { SignIn, SignUp, Main } from "../pages"
import { BodyRoute } from "./BodyRoute"

export const AppRouter = ({ List }) => {
  console.log(List)
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/quiz/*" element={<BodyRoute list={List} />} />
        <Route path="*" element={<Main />}></Route>
      </Routes>
    </>
  )
}
