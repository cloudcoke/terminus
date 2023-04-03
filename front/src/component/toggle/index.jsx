import { useDispatch, useSelector } from "react-redux"
import { ChangeMode, ModeList } from "../../store"
import { ToggleInput, ToggleLabel, ToggleWrap } from "./styled"

export const Toggle = ({ height }) => {
    const dispatch = useDispatch()
    const { isMode } = useSelector((state) => state.mode)

    return (
        <div>
            <ToggleWrap height={height}>
                <ToggleInput id="toggle_checkbox" type="checkbox" />
                <ToggleLabel
                    htmlFor="toggle_checkbox"
                    onClick={async () => {
                        await dispatch(ModeList(!isMode))
                        await dispatch(ChangeMode(isMode))
                    }}
                />
            </ToggleWrap>
        </div>
    )
}
