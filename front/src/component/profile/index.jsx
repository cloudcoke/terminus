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
            <PointListSC color={v.SourceTable}>
                {v.command && v.command}
                <p>{v.SourceTable === "PointUp" ? "+" : "-"}</p>
            </PointListSC>
            <PointListSC color={v.SourceTable}>{v.Point}</PointListSC>
        </PointUlistSC>
    ))

    return <>{pointList}</>
}
