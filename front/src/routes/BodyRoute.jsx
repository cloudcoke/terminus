import { Routes, Route } from "react-router-dom"
import { Quiz } from "../pages"

export const BodyRoute = ({ list }) => {
    return (
        <Routes>
            <Route path="linux/*">
                <Route path=":command" element={<Quiz list={list} />} />
            </Route>
            <Route path="mysql/*">
                <Route path=":command" element={<Quiz list={list} />} />
            </Route>
        </Routes>
    )
}
