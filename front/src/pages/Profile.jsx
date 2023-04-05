import { useSelector } from "react-redux"
import { Logo } from "../common/header/styled"
import { Button } from "../component"
import BashLogo from "../component/bashlogo"
import { ProfileCard, ProfileLogo, ProfileWrap, USER } from "../component/profile"

export const Profile = () => {
    const { userId } = useSelector((state) => state.user.data)
    console.log(userId)
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
                    <div className="PointList"></div>
                    <Button text="닫기" height="4" long />
                </ProfileCard>
            </ProfileWrap>
        </>
    )
}
