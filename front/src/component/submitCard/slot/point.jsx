import { useState, useEffect } from "react"
import { SlotWrap } from "../styled"

export const Slot = () => {
    const [number, setNumber] = useState(0)
    const [spinning, setSpinning] = useState(true)

    useEffect(() => {
        let intervalId = null

        if (spinning) {
            intervalId = setInterval(() => {
                setNumber(Math.floor(Math.random() * 100))
            }, 50)
            setTimeout(() => {
                clearInterval(intervalId)
                setNumber(10)
                setSpinning(false)
            }, 1000)
        }

        return () => clearInterval(intervalId)
    }, [spinning])

    return (
        <SlotWrap className="slot-machine">
            <div className="reel">
                <p>+{number}</p>
                <span>pt</span>
            </div>
        </SlotWrap>
    )
}
