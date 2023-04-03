import dotenv from "dotenv";
import { Options } from "sequelize";
dotenv.config({ path: process.env.PATH });

interface Db {
    development: Options;
    test: Options;
}

interface Config {
    localPort: string;
    salt: string;
    db: Db;
}

const database: string = process.env.DB_DATABASE ? process.env.DB_DATABASE : "terminus";
const localPort = process.env.LOCAL_PORT || "3005";
const port: number | undefined = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined;
const username: string = process.env.DB_USER!;

const config: Config = {
    localPort,
    salt: process.env.DB_SALT!,
    db: {
        development: {
            port: port || 3306,
            host: process.env.DB_HOST,
            username: username,
            password: process.env.DB_PASSWORD,
            database,
            dialect: "mysql",
            timezone: "Asia/Seoul",
            dialectOptions: {
                dateStrings: true,
                typeCast: true,
            },
            define: {
                freezeTableName: true,
                timestamps: true,
            },
        },
        test: {},
    },
};

export default config;

