const express = require("express")
const { createServer } = require("https")
const app = require("./app")
const { Server } = require("socket.io")
const pty = require("node-pty")
const os = require("os")
const { readFileSync } = require("fs")
const httpServer = createServer(
  {
    key: readFileSync("./privkey.pem"),
    cert: readFileSync("./fullchain.pem"),
  app
)
const { localPort } = require("./config")
const shell = os.platform() === "win32" ? "powershell.exe" : "bash"

const ptyProcess = pty.spawn(shell, [], {
  name: "xterm-color",
  //   cwd: process.env.HOME,
  env: process.env,
})

const io = new Server(httpServer, {
  cors: {
    origin: true,
    credentials: true,
  },
})
io.on("connection", (socket) => {
  console.log("new session")
  socket.on("send", (data) => {
    a = data
    ptyProcess.write(`${data}\r`)
    // ptyProcess.resize(100, 40)
  })

  ptyProcess.on("data", (datas) => {
    socket.emit("data", `${datas}`)
  })
  socket.on("disconnect", () => {
    console.log("프로세스 종료", 111)
    ptyProcess.removeAllListeners("data")
  })
})

httpServer.listen(localPort, () => {
  console.log(`Back Start on ${localPort}`)
})
