import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import request from "../../utils/request"

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

    // useEffect(() => {
    //     console.log(userPoint.)

    // }, [userPoint])

    const pointList = () => {}

    return <>userPoint.</>
    // if (point) {
    //     point.map((v) => {
    //         let color = v.sourceTable === "PointUp" ? "blue" : "red"
    //         return <>{color}</>
    //     })
    // }
    return <></>
}
