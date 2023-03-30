import { BodyWrap } from "../common/body"
import { Button } from "../component"
import { Termi } from "../component/Quiz"
import { BtnWrap, CenterBtn, PromptWrap } from "../component/Quiz/styled"

export const Quiz = () => {
    return (
        <>
            <BodyWrap>
                <PromptWrap />
                <Termi height={65} />
                <BtnWrap>
                    <Button text="Hint" height="4" />
                    <CenterBtn>
                        <Button text="Prev" height="4" />
                        <Button text="Clear" height="4" />
                        <Button text="Next" height="4" />
                    </CenterBtn>
                    <Button text="Submit" height="4" />
                </BtnWrap>
            </BodyWrap>
        </>
    )
}
