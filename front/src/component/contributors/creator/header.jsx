import { CircleSC } from "../styled"

const circleList = ["M", "F", "B", "D"]

export const Circle = ({ setState }) => {
    const handleClick = (e) => {
        setState(e.target.innerHTML)
    }
    const Circles = circleList.map((v, i) => (
        <CircleSC key={i} onClick={handleClick}>
            {v}
        </CircleSC>
    ))
    return <div>{Circles}</div>
}
