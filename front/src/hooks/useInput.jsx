import { useState } from "react"

export const useInput = (inital) => {
    const [value, setValue] = useState(inital)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange,
    }
}
