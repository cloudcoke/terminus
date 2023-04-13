import { useSelector } from "react-redux"
import { ProfilePoint } from "../component/profile"
import { Button } from "../component"
import BashLogo from "../component/bashlogo"
import { PointList, ProfileCard, ProfileLogo, ProfileWrap, USER } from "../component/profile/styled"
import { useEffect, useState } from "react"
import request from "../utils/request"

export const Profile = () => {
    const { userId } = useSelector((state) => state.user.data)
    const [totalPoint, setTotalPoint] = useState(0)
    const [userPoint, setUserPoint] = useState([])

    const handleProfile = async () => {
        const {
            data: { point, total },
        } = await request.get(`/user/profile/${userId}`)
        if (point) setUserPoint(point)
        console.log(total)
        setTotalPoint(total)
    }
    useEffect(() => {
        handleProfile()
    }, [])
    return (
        <>
            <ProfileWrap>
                <ProfileCard>
                    <ProfileLogo>
                        <BashLogo NoneTyping />
                    </ProfileLogo>
                    <USER>
                        <div>{userId}</div>
                        <div>님의 정보</div>
                        <div>
                            {totalPoint}
                            <p>Point</p>
                        </div>
                    </USER>
                    <PointList>
                        <ProfilePoint userPoint={userPoint} />
                    </PointList>
                    <Button text="닫기" height="4" long />
                </ProfileCard>
            </ProfileWrap>
        </>
    )
}
