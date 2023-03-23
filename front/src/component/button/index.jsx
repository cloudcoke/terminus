import { Btn } from "./styled"

export const Button = ({ text, height, long }) => {
    return (
        <>
            <Btn height={height} long={long}>
                {text}
            </Btn>
        </>
    )
}
