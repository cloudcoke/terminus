import { ToggleInput, ToggleLabel, ToggleWrap } from "./styled"

export const Toggle = ({ height }) => {
    return (
        <>
            <ToggleWrap height={height}>
                <ToggleInput id="toggle_checkbox" type="checkbox" />
                <ToggleLabel htmlFor="toggle_checkbox" />
            </ToggleWrap>
        </>
    )
}
