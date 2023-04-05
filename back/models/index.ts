// import fs from "fs";
import path from "path";
import config from "../config";
const db = config.db.development;

import { Sequelize } from "sequelize-typescript";
import User from "./user.model";
import Quiz from "./quiz.model";
import PointDown from "./pointdown.model";
import PointUp from "./pointup.model";
import Options from "./option.model";
import Token from "./token.model";
import Comment from "./comment.model";

const sequelize: Sequelize = new Sequelize({
    host: db.host,
    username: db.username,
    password: db.password,
    database: db.database,
    dialect: db.dialect,
    models: [path.join(__dirname, "*.model.ts")],
});

sequelize.addModels([User, Quiz, PointDown, PointUp, Options, Token, Comment]);

export { User, Quiz, PointDown, PointUp, Options, Token, Comment };

export default sequelize;

// export const sequelize = new Sequelize(db.database!, db.username!, db.password, db);
// //"Option에 string | undefind // string 강제로 넣어도 , Options 타입지정이 이미 string"

// fs.readdirSync(__dirname)
//     .filter((v) => v.indexOf("model") !== -1)
//     .forEach((filename) => {
//         require(path.join(__dirname, filename))({ sequelize, DataTypes, Model });
//     });

// const { models } = sequelize;

