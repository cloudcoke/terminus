import { memo } from "react"
import { NavLink } from "react-router-dom"
import { Nav, Ul } from "../styled"

export const Navi = memo(() => {
    const List = [
        {
            difficulty: "easy",
            command: [
                { command: "ls" },
                { command: "c8d" },
                { command: "l6s" },
                { command: "5s" },
                { command: "3s" },
                { command: "2s" },
            ],
        },
        {
            difficulty: "middle",
            command: [
                { command: "hs" },
                { command: "dd" },
                { command: "cs" },
                { command: "ds" },
                { command: "bs" },
                { command: "as" },
            ],
        },
        {
            difficulty: "hard",
            command: [
                { command: "ls" },
                { command: "ad" },
                { command: "bd" },
                { command: "cd" },
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
