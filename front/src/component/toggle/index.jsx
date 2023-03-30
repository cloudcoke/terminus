import { ToggleInput, ToggleLabel, ToggleWrap } from "./styled"

export const Toggle = ({ height, onClick }) => {
    return (
        <>
            <ToggleWrap height={height} onClick={() => onClick()}>
                <ToggleInput id="toggle_checkbox" type="checkbox" />
                <ToggleLabel htmlFor="toggle_checkbox" />
            </ToggleWrap>
        </>
    )
}
