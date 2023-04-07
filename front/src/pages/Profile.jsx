import { useSelector } from "react-redux"
import { ProfilePoint } from "../component/profile"
import { Button } from "../component"
import BashLogo from "../component/bashlogo"
import { PointList, ProfileCard, ProfileLogo, ProfileWrap, USER } from "../component/profile/styled"

export const Profile = () => {
    const { userId } = useSelector((state) => state.user.data)

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
                    </USER>
                    <PointList>
                        <ProfilePoint />
                    </PointList>
                    <Button text="닫기" height="4" long />
                </ProfileCard>
            </ProfileWrap>
        </>
    )
}
