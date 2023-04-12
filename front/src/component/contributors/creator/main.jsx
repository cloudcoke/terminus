import { NavLink } from "react-router-dom"
import { MemberCard, MemberCardWrap, MemberContent, MemberPosition, MemeberWrap } from "../styled/"

const memberList = [
    {
        position: "FRONT-END",
        name: "백종환",
        blog: "https://baekspace.tistory.com/",
        Email: "baekbr13@gmail.com",
        github: "https://github.com/100space",
    },
    {
        position: "BACK-END",
        name: "박경철",
        blog: "https://meter216.tistory.com/",
        Email: "gyungchul6689@gmail.com",
        github: "https://github.com/kyungcheol1",
    },
    {
        position: "BACK-END",
        name: "이민수(팀장)",
        blog: "https://velog.io/@cloudcoke",
        Email: "cloudcoke.dev@gmail.com",
        github: "https://github.com/cloudcoke",
    },
]
export const Member = () => {
    const members = memberList.map((v, i) => (
        <MemberCardWrap key={i}>
            <MemberCard>
                <MemberPosition>{v.position}</MemberPosition>
                <MemberContent>{v.name}</MemberContent>
                <MemberContent>
                    <p>
                        <a href={v.blog}>Blog Webpage</a>
                    </p>
                    <p>
                        <a href={v.github}>Github Webpage</a>
                    </p>
                    <p>
                        <a href={`mailto:${v.Email}`}>Send Email</a>
                    </p>
                </MemberContent>
            </MemberCard>
        </MemberCardWrap>
    ))
    return <>{members}</>
}
