import sequelize, { PointDown, PointUp, Comment } from "./models";
// import User from "./models/user.model";
// import Quiz from "./models/quiz.model";
// const { quizData } = require("./quiz/linux");
// const { options } = require("./quiz/options");
// const { sqlQuiz } = require("./quiz/mysql");
// const { sqlOptions } = require("./quiz/mysqlOptions");
// import { UserService } from "./src/user/user.module";

import { createServer } from "http";
import app from "./app";

export const httpServer = createServer(app);
import config from "./config";
// import Options from "./models/option.model";
import "./socket";
const { localPort } = config;

httpServer.listen(localPort, async () => {
    await sequelize.sync({ force: false });
    // await UserService.inputUser({ userId: "admin1", userPw: "admin1" })
    // await UserService.inputUser({ userId: "admin99", userPw: "admin99" })
    // await UserService.inputUser({ userId: "admin100", userPw: "admin100" })
    // await UserService.inputUser({ userId: "jong", userPw: "jong" })
    // await UserService.inputUser({ userId: "graduer", userPw: "test" })
    // await UserService.inputUser({ userId: "graduer2", userPw: "test" })
    // await UserService.inputUser({ userId: "graduer3", userPw: "test" })
    // await UserService.inputUser({ userId: "graduer4", userPw: "test" })
    // await quizData.map((v: any) => {
    //   new Quiz(v).save()
    // })
    // await options.map((v: any) => {
    //   new Options(v).save()
    // })
    // await sqlQuiz.map((v: any) => {
    //   new Quiz(v).save()
    // })
    // await sqlOptions.map((v: any) => {
    //   new Options(v).save()
    // })
    // await new PointUp({ userId: "admin1", quizId: 1, point: 10 }).save()
    // await new PointUp({ userId: "admin1", quizId: 2, point: 10 }).save()
    // await new PointUp({ userId: "admin1", quizId: 3, point: 10 }).save()
    // await new PointUp({ userId: "admin1", quizId: 4, point: 10 }).save()
    // await new PointUp({ userId: "admin1", quizId: 5, point: 10 }).save()
    // await new PointUp({ userId: "admin99", quizId: 1, point: 110 }).save()
    // await new PointUp({ userId: "admin99", quizId: 2, point: 110 }).save()
    // await new PointUp({ userId: "admin99", quizId: 3, point: 120 }).save()
    // await new PointUp({ userId: "admin99", quizId: 4, point: 10 }).save()
    // await new PointUp({ userId: "admin99", quizId: 5, point: 10 }).save()
    // await new PointUp({ userId: "admin100", quizId: 1, point: 110 }).save()
    // await new PointUp({ userId: "admin100", quizId: 2, point: 110 }).save()
    // await new PointUp({ userId: "admin100", quizId: 3, point: 120 }).save()
    // await new PointUp({ userId: "admin100", quizId: 4, point: 20 }).save()
    // await new PointUp({ userId: "admin100", quizId: 5, point: 10 }).save()
    // await new PointUp({ userId: "jong", quizId: 1, point: 100 }).save()
    // await new PointUp({ userId: "jong", quizId: 2, point: 110 }).save()
    // await new PointUp({ userId: "jong", quizId: 3, point: 120 }).save()
    // await new PointUp({ userId: "jong", quizId: 4, point: 100 }).save()
    // await new PointUp({ userId: "jong", quizId: 5, point: 10 }).save()
    // await new PointUp({ userId: "graduer", quizId: 5, point: 500 }).save()
    // await new PointUp({ userId: "graduer2", quizId: 5, point: 530 }).save()
    // await new PointUp({ userId: "graduer3", quizId: 5, point: 510 }).save()
    // await new PointUp({ userId: "graduer4", quizId: 5, point: 520 }).save()
    // await new PointDown({ userId: "admin1", point: 10 }).save()
    // await new Comment({ userId: "admin1", comment: "hello1" }).save()
    // await new Comment({ userId: "admin1", comment: "hello2" }).save()
    console.log(`Back Start on ${localPort}`);
});

