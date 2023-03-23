import { Btn } from "./styled"

export const Button = ({ text, height }) => {
    return (
        <>
            <Btn height={height}>{text}</Btn>
        </>
    )
}
