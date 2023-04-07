import { useState, useEffect, useRef } from "react"
import { Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit"
import "xterm/css/xterm.css"
import { BtnWrap, CenterBtn, TermWrap } from "./styled"
import { Button } from "../button"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import request from "../../utils/request"

//test
export const Termi = ({ height, socket, setSubmit }) => {
    const terms = useRef(null)
    const term = useRef(null)
    const hidden = useRef(null)
    const [history, setHistory] = useState({ command: [], index: 0 })
    const location = useLocation().pathname
    const { userId } = useSelector((state) => state.user.data)
    const { examMode } = useSelector((state) => state.examMode)
    const { env, kind } = useSelector((state) => state.mode)
    const command = location.split("/").pop()
    let commandInput = ""
    // const handleKeyDown = (e) => {
    //     if (e.keyCode !== 32) {
    //         e.preventDefault()
    //     }
    // }
    const clearInput = (length) => {
        for (let i = 0; i < length; i++) {
            term.current.write("\b \b")
        }
    }
    const handleEnter = (a) => {
        console.log(a)
        if (!a) return null
        setHistory((prev) => ({
            command: [...prev.command, a],
            index: 0,
        }))
        clearInput(a.length)
    }

    const handleUp = (prev) => {
        if (!prev || !prev.command || prev.command.length === 0) {
            return { command: [], index: 0 }
        }
        const { command, index } = prev
        const lastIndex = command.length - 1
        const newIndex = index <= 0 ? lastIndex : index - 1
        const selectedCommand = command[newIndex]
        const prevCommand = command[newIndex + 1]
        if (newIndex >= 0) {
            console.log(prevCommand)
            if (prevCommand) {
                clearInput(prevCommand.length)
            }
            term.current.write(selectedCommand)
            return {
                command: [...command],
                index: newIndex,
            }
        }
    }
    useEffect(() => {
        if (!term.current && env) {
            const handleEmit = (prev) => {
                socket.emit("send", prev)
            }
            socket.emit("user", userId)
            socket.on("data", (datar) => {
                term.current.write(`${datar}`)
            })
            let viMode = false
            term.current = new Terminal({
                fontFamily: "D2Coding",
                cursorBlink: true,
                fontSize: 18,
                letterSpacing: env === "mobile" ? 6 : 2,
                lineHeight: 1.3,
            })

            term.current.open(terms.current)
            const fitAddon = new FitAddon()
            term.current.loadAddon(fitAddon)
            fitAddon.fit()

            term.current.prompt = () => {
                term.current.write("\r$ ")
            }

            term.current.prompt()
            term.current.onData((data) => {
                if (viMode === false) {
                    switch (data) {
                        case "\u0003": // Ctrl+C
                            if (!commandInput) return null
                            clearInput(commandInput.length)
                            commandInput = ""
                            break
                        case "\r": // Enter
                            if (commandInput.indexOf("vi") >= 0) viMode = true
                            if (commandInput.indexOf("exit") >= 0) break
                            handleEnter(commandInput)
                            handleEmit(commandInput)
                            commandInput = ""
                            break
                        case "\u007F": // Backspace
                            if (commandInput.length === 0) break
                            term.current.write("\b \b")
                            commandInput = commandInput.slice(0, -1)
                            break

                        case "\u001b[A": //ArrowUp
                            setHistory((prev) => handleUp(prev))
                            break
                        case "\u0009":
                            socket.emit("vi", "\t")
                            break
                        default:
                            console.log(data, 123123)
                            term.current.write(data)
                            commandInput += data
                    }
                }
                if (viMode === true) {
                    const code = data.charCodeAt(0)
                    if (code === 3) {
                        handleEmit("SIGINT")
                        return
                    }

                    // ctrl + z
                    if (code === 26) {
                        handleEmit("SIGTSTP")
                        return
                    }

                    // backspace
                    if (code === 127) {
                        socket.emit("vi", "\b")
                        return
                    }

                    // esc key
                    if (code === 27 && data.length === 1) {
                        socket.emit("vi", "\x1b")
                        return
                    }

                    // vi up key
                    if (code === 27 && data.includes("OA")) {
                        socket.emit("vi", "\x1b[A")
                        return
                    }

                    // vi down key
                    if (code === 27 && data.includes("OB")) {
                        socket.emit("vi", "\x1b[B")
                        return
                    }

                    // vi right key
                    if (code === 27 && data.includes("OC")) {
                        socket.emit("vi", "\x1b[C")
                        return
                    }

                    // vi left key
                    if (code === 27 && data.includes("OD")) {
                        socket.emit("vi", "\x1b[D")
                        return
                    }

                    // tab
                    if (code === 9) {
                        socket.emit("vi", "\t")
                        // term.current.write(data)

                        return
                    }
                    // i
                    if (code === 105) {
                        socket.emit("vi", data)
                        clearInput()
                        return
                    }
                    // enter
                    if (code === 13) {
                        socket.emit("vi", "\r")
                        term.current.write(data)
                    } else if (code < 32) {
                        return
                    } else {
                        socket.emit("vi", data)
                    }
                }
            })
        }
    }, [env])
    useEffect(() => {
        socket.emit("send", "clear")
        socket.emit("command", `${command}/${kind}`)
    }, [command])

    useEffect(() => {
        hidden.current.value = JSON.stringify(history)
    }, [history])

    const answer = history.command[history.command.length - 1]
    return (
        <>
            <TermWrap ref={terms} tabIndex={0} height={height}>
                <input type="hidden" ref={hidden} />
            </TermWrap>
            {location !== "/freeterminal" && (
                <BtnWrap>
                    <Button text="Exam" height="4" socket={socket} />
                    <CenterBtn>
                        <Button text="Prev" height="4" />
                        <Button text="Clear" height="4" background="#e42020" socket={socket} />
                        <Button text="Next" height="4" socket={socket} setSubmit={setSubmit} />
                    </CenterBtn>
                    {examMode ? (
                        <Button text="Submit" height="4" answerSubmit={{ answer, setSubmit }} />
                    ) : (
                        <div style={{ width: "10rem", height: "4rem" }}></div>
                    )}
                </BtnWrap>
            )}
        </>
    )
}
