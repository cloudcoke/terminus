import { useState } from "react"
import { Position } from "./creator"
import { Circle } from "./creator/header"
import { CreatorWrap, CreatorHearderSC, LightSwitch } from "./styled"

export const Creator = ({ lightState, setLightState }) => {
    const [state, setState] = useState("M")

    return (
        <>
            <CreatorHearderSC>
                <Circle setState={setState} />
            </CreatorHearderSC>
            {state === "M" ? (
                <CreatorWrap className="mainChild2">
                    <Position state={state} />
                </CreatorWrap>
            ) : (
                <CreatorWrap>
                    <Position state={state} />
                </CreatorWrap>
            )}
            <LightSwitch
                lightState={lightState}
                onClick={() => {
                    setLightState(!lightState)
                }}
            />
        </>
    )
}
