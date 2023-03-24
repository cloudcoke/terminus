import React, { useState, useEffect } from "react"
import { StyledCursor } from "./styled"

const TypingEffect = ({ text, speed, state }) => {
    const [displayText, setDisplayText] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [cursorActive, setCursorActive] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCursorActive(cursorActive)
        }, 100)

        return () => clearTimeout(timeout)
    }, [cursorActive])

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            setIsTyping(false)

            setDisplayText(text.slice(0, currentIndex + 1))

            currentIndex++
            if (currentIndex === text.length) {
                setIsTyping(false)
                clearInterval(interval)
                if (state) state(true)
                console.log(111111)
            }
        }, speed)

        return () => {
            clearInterval(interval)
        }
    }, [text])

    return (
        <>
            {displayText}
            {isTyping && <StyledCursor isActive={cursorActive} />}
        </>
    )
}

export default TypingEffect
