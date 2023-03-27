import { useState } from "react"
import { memo } from "react"
import { NavLink } from "react-router-dom"
import { Nav, Ul } from "../styled"

export const Navi = memo(({ List }) => {
    const [isView, setIsView] = useState({
        easy: { id: "easy", isOpen: false },
        middle: { id: "middle", isOpen: false },
        hard: { id: "hard", isOpen: false },
    })
    const handleClick = (e) => {
        const id = e.target.className
        setIsView((state) => ({
            ...state,
            [id]: { ...state[id], isOpen: !state[id].isOpen },
        }))
    }

    const Li = List.map((v) => (
        <Ul key={v.difficulty}>
            <h2 onClick={handleClick} className={v.difficulty}>
                {v.difficulty.toUpperCase()}
            </h2>
            {isView[v.difficulty].isOpen && (
                <>
                    {v.command.map((item) => (
                        <li key={item.command}>
                            <NavLink to={`/quiz/${v.difficulty}/${item.command}`}>{item.command}</NavLink>
                        </li>
                    ))}
                </>
            )}
        </Ul>
    ))
    return <Nav>{Li}</Nav>
})
