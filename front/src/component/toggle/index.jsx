import { ToggleInput, ToggleLabel, ToggleWrap } from "./styled"

export const Toggle = ({ height, onClick }) => {
    const { mode, setMode } = onClick

    return (
        <div onClick={() => setMode(!mode)}>
            <ToggleWrap height={height}>
                <ToggleInput id="toggle_checkbox" type="checkbox" />
                <ToggleLabel htmlFor="toggle_checkbox" />
            </ToggleWrap>
        </div>
    )
}
