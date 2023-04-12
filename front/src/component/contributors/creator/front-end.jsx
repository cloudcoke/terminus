import { PositionKind, Skill, Stack, TechStack } from "../styled"
import ReactImg from "../../../image/React.png"
import ReduxImg from "../../../image/Redux.png"
import XtermImg from "../../../image/Xterm.png"
import SocketImg from "../../../image/Socketio.png"

export const FrontEnd = () => {
    return (
        <>
            <PositionKind>FRONT-END</PositionKind>
            <Skill>
                <div>Tech Stack</div>
            </Skill>
            <TechStack>
                <Stack>
                    <img src={ReactImg} alt="React" />
                </Stack>
                <Stack>
                    <img src={ReduxImg} alt="Redux" />
                </Stack>
                <Stack>
                    <img src={XtermImg} alt="Xterm" />
                </Stack>
                <Stack>
                    <img src={SocketImg} alt="Socket" />
                </Stack>
            </TechStack>
        </>
    )
}
