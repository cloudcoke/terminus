import { useState } from "react"

export const AA = (init) => {
    const [test, setTest] = useState(init)

    const onClick = () => {
        setTest(!test)
    }
    return {
        test,
        onClick,
    }
}
