const express = require("express")
const { createServer } = require("http")
const app = require("./app")
const { Server } = require("socket.io")
const pty = require("node-pty")
const os = require("os")
const httpServer = createServer(app)
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

// wss.on("connection", (ws) => {
//     console.log("new session")
//     ws.on("message", (command) => {
//         ptyProcess.write(command)
//     })

//     ptyProcess.on("data", function (data) {
//         ws.send(data)
//         console.log(data)
//     })
// })
httpServer.listen(3005)
