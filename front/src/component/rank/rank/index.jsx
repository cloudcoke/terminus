import { Bar } from "../styled"

const ranklist = [
    { id: 1, userId: "userId1", point: 400 },
    { id: 2, userId: "userId2", point: 240 },
    { id: 3, userId: "userId3", point: 140 },
]

export const Ranking = () => {
    const Div = ranklist.map((v) => (
        <div key={v.id}>
            <div>{v.id}</div>
            <p>{v.userId}</p>
        </div>
    ))
    return <>{Div}</>
}
export const Graphy = ({ rank }) => {
    const Div = ranklist.map((v) => (
        <div key={v.id}>
            <div className="backgroundBar">
                <Bar point={v.point} rank={rank}>
                    {v.point}/600
                </Bar>
            </div>
        </div>
    ))
    return <>{Div}</>
}
