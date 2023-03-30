import { useState, useEffect, useRef } from "react"
import { Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit"
import io from "socket.io-client"
import "xterm/css/xterm.css"
import { TermWrap } from "./styled"

//test
export const Termi = ({ height }) => {
  const terms = useRef(null)
  const term = useRef(null)
  const hidden = useRef(null)
  const [command, setCommand] = useState("")
  const [history, setHistory] = useState({ command: [], index: 0 })
  const domain = process.env.REACT_APP_BACKSERVER
  const port = process.env.REACT_APP_PORT
  const backserver = `${domain}:${port}`
  let a = ""

  const handleKeyDown = (e) => {
    console.log(e.key)
    // e.preventDefault()
  }
  const clearInput = (length) => {
    for (let i = 0; i < length; i++) {
      term.current.write("\b \b")
    }
  }
  const handleEnter = (a) => {
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
    if (!term.current) {
      const socket = io(backserver, { secure: true, withCredentials: true, transports: ["websocket"] })
      const handleEmit = (prev) => {
        socket.emit("send", prev)
      }
      socket.on("data", (datar) => {
        term.current.write(`${datar}`)
      })
      console.log(hidden.current.value)
      term.current = new Terminal({
        fontFamily: "D2Coding",
        cursorBlink: true,
      })
      console.dir(term.current)

      term.current.open(terms.current)

      const fitAddon = new FitAddon()
      term.current.loadAddon(fitAddon)
      fitAddon.fit()

      term.current.prompt = () => {
        term.current.write("\r$ ")
      }
      term.current.prompt()
      term.current.onData((data) => {
        switch (data) {
          case "\u0003": // Ctrl+C
            if (!a) return null
            clearInput(a.length)
            a = ""
            break
          case "\r": // Enter
            if (a.indexOf("vi") >= 0) break
            handleEnter(a)
            handleEmit(a)
            a = ""
            break
          case "\u007F": // Backspace
            term.current.write("\b \b")
            a = a.slice(0, -1)
            break

          case "\u001b[A": //ArrowUp
            setHistory((prev) => handleUp(prev))
            break
          case "":
            break
          default:
            term.current.write(data)
            a += data
        }
      })
    }
  }, [command])

  useEffect(() => {
    hidden.current.value = JSON.stringify(history)
  }, [history])
  console.log(height)
  return (
    <TermWrap ref={terms} onKeyDown={handleKeyDown} tabIndex={0} height={height}>
      <input type="hidden" ref={hidden} />
    </TermWrap>
  )
}
