import { PositionKind, Skill, Stack, TechStack } from "../styled"
import TSImg from "../../../image/TS.png"
import NodeImg from "../../../image/Node.png"
import seqImg from "../../../image/seq.png"
import MysqlImg from "../../../image/Mysql.png"

export const BackEnd = () => {
    return (
        <>
            <PositionKind>BACK-END</PositionKind>
            <Skill>
                <div>Tech Stack</div>
            </Skill>
            <TechStack>
                <Stack>
                    <img src={TSImg} alt="TS" />
                </Stack>
                <Stack>
                    <img src={NodeImg} alt="Node" />
                </Stack>
                <Stack>
                    <img src={seqImg} alt="seq" />
                </Stack>
                <Stack>
                    <img src={MysqlImg} alt="Mysql" />
                </Stack>
            </TechStack>
        </>
    )
}
