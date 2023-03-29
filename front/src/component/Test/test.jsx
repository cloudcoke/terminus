import { useState, useEffect, useRef } from "react"
import { Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit"
import io from "socket.io-client"
import "xterm/css/xterm.css"

export const Termi = () => {
    const terms = useRef(null)
    const term = useRef(null)
    const hidden = useRef(null)
    const [command, setCommand] = useState("")
    const [history, setHistory] = useState({ command: [], index: -1 })
    let a = ""

    useEffect(() => {
        if (!term.current) {
            const socket = io("http://127.0.0.1:3005")

            console.log(socket)
            const handleEmit = (prev) => {
                console.log(prev)
                socket.emit("send", prev + "\n")
            }
            socket.on("data", (datar) => {
                console.log(datar, "============")
                term.current.write(`${datar}`)
            })
            console.log(hidden.current.value)
            term.current = new Terminal({
                fontSize: 40,
            })
            term.current.open(terms.current)

            const fitAddon = new FitAddon()
            term.current.loadAddon(fitAddon)
            fitAddon.fit()

            term.current.prompt = () => {
                term.current.write("\r\n$ ")
            }
            term.current.prompt()
            term.current.onData((data) => {
                switch (data) {
                    case "\u0003": // Ctrl+C
                        // const historyAr = JSON.parse(hidden.current.value).command
                        // const pre = historyAr[historyAr.length - 1]
                        // clearInput(pre.length)
                        setCommand((prev) => {
                            if (prev) {
                                const str = prev.indexOf("undefined") >= 0 ? prev.replace(/^undefined/, "") : prev
                                if (str) {
                                    clearInput(str.length)
                                }
                            }
                        })
                        break
                    case "\r": // Enter
                        term.current.write("\n\n")
                        term.current.prompt()
                        clearInput(a.length + 2)
                        handleEmit(a)
                        a = ""
                        setCommand((command) => {
                            if (command) {
                                const str =
                                    command.indexOf("undefined") >= 0 ? command.replace(/^undefined/, "") : command
                                if (str) {
                                    // handleEmit(str)
                                    console.log(str)
                                    setHistory((prev) => ({
                                        command: [...prev.command, str],
                                        index: -1,
                                    }))
                                    setCommand("")
                                }
                            }
                        })
                        break
                    case "\u007F": // Backspace
                        term.current.write("\b \b")
                        setCommand((prev) => prev.slice(0, -1))
                        break

                    case "\u001b[A": //ArrowUp
                        setHistory((prev) => {
                            if (!prev || !prev.command || prev.command.length === 0) {
                                return prev
                            }
                            const { command, index } = prev
                            const newIndex = index >= (command?.length || 0) - 1 ? 0 : index + 1
                            const prevCommand = command && command[command.length - newIndex]
                            const selectedCommand = command[command.length - 1 - newIndex]
                            if (prevCommand) {
                                const length = prevCommand.length
                                clearInput(length)
                            }
                            term.current.write(selectedCommand)
                            setCommand(selectedCommand)
                            return {
                                command,
                                index: newIndex,
                            }
                        })

                        break

                    default:
                        term.current.write(data)
                        a += data
                    // setCommand((prev) => prev + data)
                }
            })
        }
    }, [command])

    useEffect(() => {
        hidden.current.value = JSON.stringify(history)
    }, [history])

    const handleKeyDown = (e) => {
        console.log(e.key)
        // e.preventDefault()
    }
    const clearInput = (length) => {
        for (let i = 0; i < length; i++) {
            term.current.write("\b \b")
        }
    }

    return (
        <div ref={terms} onKeyDown={handleKeyDown} tabIndex={0}>
            <input type="hidden" ref={hidden} />
        </div>
    )
}
