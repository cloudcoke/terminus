const { createServer } = require("http")
const app = require("./app")
const { Server } = require("socket.io")
const pty = require("node-pty")
const os = require("os")

const httpServer = createServer(app)
const { localPort } = require("./config")
const shell = os.platform() === "win32" ? "powershell.exe" : "bash"

const terminals = new Map()
const io = new Server(httpServer, {
  cors: {
    origin: true,
    credentials: true,
  },
})

io.on("connection", (socket) => {
  console.log("new session")
  const term = pty.spawn(shell, [], {
    name: "xterm-color",
  })

  terminals.set(socket, term)
  term.write(`bash /home/ubuntu/user.sh\r`)
  term.write(`clear\r`)

  term.on("data", (data) => {
    socket.emit("data", data)
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

httpServer.listen(localPort, () => {
  console.log(`Back Start on ${localPort}`)
})
