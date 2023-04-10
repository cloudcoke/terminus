import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import request from "../../utils/request"
import { PointListSC, PointUlistSC } from "./styled"

export const ProfilePoint = () => {
    const { userId } = useSelector((state) => state.user.data)
    const [userPoint, setUserPoint] = useState([])

    const handleProfile = async () => {
        const {
            data: { point },
        } = await request.get(`/user/profile/${userId}`)
        if (point) setUserPoint(point)
    }
    useEffect(() => {
        handleProfile()
    }, [])

    const pointList = userPoint.map((v, i) => (
        <PointUlistSC key={i}>
            <PointListSC>{v.createdAt}</PointListSC>
            <PointListSC color={v.SourceTable}>{v.command && v.command}</PointListSC>
            <PointListSC color={v.SourceTable}>
                <p>{v.SourceTable === "PointUp" ? "+" : "-"}</p>
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
