import { Routes, Route } from "react-router-dom"
import { Quiz } from "../pages"

export const BodyRoute = ({ list }) => {
    console.log(list, 123)
    return (
        <Routes>
            <Route path="easy/*">
                <Route path=":command" element={<Quiz list={list} />} />
            </Route>
            <Route path="middle/*">
                <Route path=":command" element={<Quiz list={list} />} />
            </Route>
            <Route path="hard/*">
                <Route path=":command" element={<Quiz list={list} />} />
            </Route>
        </Routes>
    )
}
