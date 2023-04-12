import { MemberWrap } from "../styled"
import { BackEnd } from "./back-end"
import { Deploy } from "./Deploy"
import { FrontEnd } from "./front-end"
import { Member } from "./main"

export const Position = ({ state }) => {
    return state === "F" ? (
        <>
            <FrontEnd />
        </>
    ) : state === "B" ? (
        <>
            <BackEnd />
        </>
    ) : state === "D" ? (
        <>
            <Deploy />
        </>
    ) : (
        <MemberWrap>
            <Member />
        </MemberWrap>
    )
}
