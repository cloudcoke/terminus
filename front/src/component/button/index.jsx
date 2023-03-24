import { NavLink } from "react-router-dom"
import { Btn } from "./styled"

export const Button = ({ text, height, long }) => {
    const path = text.toLowerCase().replace(" ", "")
    return (
        <>
            <Btn height={height} long={long}>
                <NavLink to={path}>{text}</NavLink>
            </Btn>
        </>
    )
}
