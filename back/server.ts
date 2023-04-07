// import app from "./app";
// import config from "./config";
import sequelize, { PointDown, PointUp } from "./models"
import User from "./models/user.model"
import Quiz from "./models/quiz.model"
const { quizData } = require("./quiz/linux")
const { options } = require("./quiz/options")
import { UserService } from "./src/user/user.module"
// const { localPort } = config;

// app.listen(localPort, async () => {

//
//     console.log(`Back Server Start with ${localPort}`);
// });

import { createServer } from "http"
import app from "./app"
import { Server } from "socket.io"
import * as pty from "node-pty"
import os from "os"

const httpServer = createServer(app)
import config from "./config"
import Options from "./models/option.model"
const { localPort } = config
const shell = os.platform() === "win32" ? "powershell.exe" : "bash"

const terminals = new Map()
const userName = new Map()
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
  socket.on("user", (userId: string) => {
    userName.set(socket, userId)
    term.write(`bash /home/ubuntu/user.sh -u ${userId}\r`)
    term.write(`clear\r`)
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
    const users = userName.get(socket)
    term.write(`logout\r`)
    term.write(`sudo userdel -r ${users}\r`)
    console.log("프로세스 종료", 111)
    term.kill()
  })
})

httpServer.listen(localPort, async () => {
  await sequelize.sync({ force: true })
  await UserService.inputUser({ userId: "admin1", userPw: "admin1" })
  await quizData.map((v: any) => {
    new Quiz(v).save()
  })
  await options.map((v: any) => {
    new Options(v).save()
  })
  await new PointUp({ userId: "admin1", quizId: 3, point: 10 }).save()
  await new PointDown({ userId: "admin1", point: 10 }).save()
  console.log(`Back Start on ${localPort}`)
})
