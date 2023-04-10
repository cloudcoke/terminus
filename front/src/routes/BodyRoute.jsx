import { Routes, Route } from "react-router-dom"
import { FreeTerm, Quiz } from "../pages"

export const BodyRoute = ({ list, socket }) => {
    return (
        <Routes>
            <Route path="linux/*">
                <Route path="freeterminal" element={<FreeTerm socket={socket} />}></Route>
                <Route path=":command" element={<Quiz list={list} socket={socket} />} />
            </Route>
            <Route path="sql/*">
                <Route path="freeterminal" element={<FreeTerm socket={socket} />}></Route>
                <Route path=":command" element={<Quiz list={list} socket={socket} />} />
            </Route>
        </Routes>
    )
}
