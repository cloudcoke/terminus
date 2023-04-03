import { Button } from "../button"
import { Slot } from "./slot"
import { CardWrap, Card, CardArea } from "./styled"
export const Submit = () => {
    return (
        <>
            <CardWrap>
                <CardArea>
                    <Card>
                        <h1>Bravo! </h1>
                        <h2>Continue to the next step</h2>
                        <Slot />
                    </Card>
                    <div>
                        <Button text="Next Level" long height="4"></Button>
                    </div>
                </CardArea>
            </CardWrap>
        </>
    )
}
