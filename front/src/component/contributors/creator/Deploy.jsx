import { PositionKind, Skill, Stack, TechStack } from "../styled"
import GitHubImg from "../../../image/GithubAction.png"
import ShellImg from "../../../image/Shell.png"
import AWSImg from "../../../image/AWS.png"
import NginxImg from "../../../image/Nginx.png"

export const Deploy = () => {
    return (
        <>
            <PositionKind>Deploy</PositionKind>
            <Skill>
                <div>Tech Stack</div>
            </Skill>
            <TechStack>
                <Stack>
                    <img src={GitHubImg} alt="GitHub" />
                </Stack>
                <Stack>
                    <img src={ShellImg} alt="Shell" />
                </Stack>
                <Stack>
                    <img src={AWSImg} alt="AWS" />
                </Stack>
                <Stack>
                    <img src={NginxImg} alt="Nginx" />
                </Stack>
            </TechStack>
        </>
    )
}
