import { memo } from "react"
import { NavLink } from "react-router-dom"
import { Nav, Ul } from "../styled"

export const Navi = memo(() => {
    const List = [
        {
            difficulty: "easy",
            command: [
                { command: "1" },
                { command: "2" },
                { command: "3" },
                { command: "4" },
                { command: "5" },
                { command: "6" },
            ],
        },
        {
            difficulty: "middle",
            command: [
                { command: "7" },
                { command: "8" },
                { command: "9" },
                { command: "11" },
                { command: "22" },
                { command: "33" },
            ],
        },
        {
            difficulty: "hard",
            command: [
                { command: "44" },
                { command: "55" },
                { command: "66" },
                { command: "77" },
                { command: "tail" },
                { command: "head" },
            ],
        },
    ]

    const Li = List.map((v) => (
        <Ul key={v.difficulty}>
            <h2>{v.difficulty.toUpperCase()}</h2>
            {v.command.map((v) => (
                <li key={v.command}>
                    <NavLink to={v.command}>{v.command}</NavLink>
                </li>
            ))}
        </Ul>
    ))
    return <Nav>{Li}</Nav>
})
