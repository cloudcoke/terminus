import { BodyWrap } from "../common/body"
import { Termi } from "../component/Quiz"
import { PromptWrap } from "../component/Quiz/styled"

export const Quiz = () => {
    return (
        <>
            <BodyWrap>
                <PromptWrap />
                <Termi height={70} />
            </BodyWrap>
        </>
    )
}
