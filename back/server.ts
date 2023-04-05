// import app from "./app";
// import config from "./config";
import sequelize from "./models";
import User from "./models/user.model";
// const { localPort } = config;

// app.listen(localPort, async () => {

//
//     console.log(`Back Server Start with ${localPort}`);
// });

import { createServer } from "http";
import app from "./app";
import { Server } from "socket.io";
import * as pty from "node-pty";
import os from "os";

const httpServer = createServer(app);
import config from "./config";
const { localPort } = config;
const shell = os.platform() === "win32" ? "powershell.exe" : "bash";

const terminals = new Map();
const io = new Server(httpServer, {
    cors: {
        origin: true,
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("new session");
    const term = pty.spawn(shell, [], {
        name: "xterm-color",
    });

    terminals.set(socket, term);
    term.write(`bash /home/ubuntu/user.sh\r`);
    term.write(`clear\r`);

    term.on("data", (data: any) => {
        socket.emit("data", data);
    });
    socket.on("send", (data) => {
        const terms = terminals.get(socket);
        terms.write(`${data}\r`);
    });

    socket.on("disconnect", () => {
        console.log("프로세스 종료", 111);
        term.kill();
    });
});

httpServer.listen(localPort, async () => {
    await sequelize.sync({ force: true });
    await new User({ userId: "admin1", userPw: "1234qwer!", nickName: "admin1" }).save();
    console.log(`Back Start on ${localPort}`);
});
