import { memo } from "react"
import TypingEffect from "../Typing"

const BashLogo = memo(({ state }) => {
    return (
        <>
            <p>
                <TypingEffect
                    state={state}
                    text={`#..████████╗███████╗██████╗.███╗...███╗██╗███╗...██╗██╗...██╗███████╗`}
                    speed={10}
                />
            </p>
            <p>
                <TypingEffect
                    text={`#..╚══██╔══╝██╔════╝██╔══██╗████╗.████║██║████╗..██║██║...██║██╔════╝`}
                    speed={10}
                />
            </p>
            <p>
                <TypingEffect
                    text={`#.....██║...█████╗..██████╔╝██╔████╔██║██║██╔██╗.██║██║...██║███████╗`}
                    speed={10}
                />
            </p>
            <p>
                <TypingEffect
                    text={`#.....██║...██╔══╝..██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██║...██║╚════██║`}
                    speed={10}
                />
            </p>
            <p>
                <TypingEffect
                    text={`#.....██║...███████╗██║..██║██║.╚═╝.██║██║██║.╚████║╚██████╔╝███████║`}
                    speed={10}
                />
            </p>
            <p>
                <TypingEffect
                    text={`#.....╚═╝...╚══════╝╚═╝..╚═╝╚═╝.....╚═╝╚═╝╚═╝..╚═══╝.╚═════╝.╚══════╝`}
                    speed={10}
                />
            </p>
        </>
    )
})

export default BashLogo
