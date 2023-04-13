import { PointListSC, PointUlistSC } from "./styled"

export const ProfilePoint = ({ userPoint }) => {
    const pointList = userPoint.map((v, i) => (
        <PointUlistSC key={i}>
            <PointListSC>{v.createdAt}</PointListSC>
            <PointListSC color={v.SourceTable}>{v.command && v.command}</PointListSC>
            <PointListSC color={v.SourceTable}>
                <p>{v.SourceTable === "PointUp" ? "+" : "PointDown" ? "-" : ""}</p>
                {v.Point}
            </PointListSC>
        </PointUlistSC>
    ))
    return (
        <>
            <PointUlistSC>
                <PointListSC color="#444">획득 일시</PointListSC>
                <PointListSC color="#444">획득 문제</PointListSC>
                <PointListSC color="#444">획득 점수</PointListSC>
            </PointUlistSC>
            {pointList}
        </>
    )
}
