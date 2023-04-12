import { Server } from "socket.io"
import * as pty from "node-pty"
import os from "os"
import { httpServer } from "./server"

const shell = os.platform() === "win32" ? "powershell.exe" : "bash"
const terminals = new Map()
const io = new Server(httpServer, {
  cors: {
    origin: true,
    credentials: true,
  },
})
let userId: string | undefined
const userHandler = (data: string | undefined) => {
  userId = data === "" ? "test" : data
}

io.on("connection", (socket) => {
  let kindData: string | undefined
  console.log("new session")
  const term = pty.spawn(shell, [], {
    name: "xterm-256color",
  })

  terminals.set(socket, term)
  socket.on("user", userHandler)
  socket.on("command", (cmd) => {
    const kind = cmd.split("/")[1]
    if (kindData === undefined && kind === "linux") {
      kindData = kind
      term.write(`bash /home/ubuntu/user.sh -u ${userId} -k ${kind}\r`)
      return
    } else if (kindData === undefined && kind === "sql") {
      kindData = kind
      term.write(`bash /home/ubuntu/user.sh -u ${userId} -k ${kind}\r`)
      return
    } else if (kindData === "sql" && kind === "sql") {
      kindData = kind
      term.write("exit\r")
      term.write(`bash /home/ubuntu/user.sh -u ${userId} -k ${kind}\r`)
      return
    } else if (kindData === "sql" && kind === "linux") {
      kindData = kind
      term.write("exit\r")
      term.write(`bash /home/ubuntu/user.sh -u ${userId} -k ${kind}\r`)
      return
    } else {
      kindData = kind
      term.write(`bash /home/ubuntu/user.sh -u ${userId} -k ${kind}\r`)
      return
    }
  })

  term.on("data", (data: any) => {
    socket.emit("data", data)
  })
  socket.on("vi", (data) => {
    const terms = terminals.get(socket)
    terms.write(data)
  })
  socket.on("send", (data) => {
    const terms = terminals.get(socket)
    terms.write(`${data}\r`)
  })

  socket.on("disconnect", () => {
    console.log("프로세스 종료", 111)
    term.kill()
  })
})
