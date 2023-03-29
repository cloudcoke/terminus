require("dotenv").config();
const env = process.env;

const config = {
    localPort: env.LOCAL_PORT,
    salt: env.SALT,
    db: {
        development: {
            port: env.DB_PORT,
            host: env.DB_HOST,
            username: env.DB_USER,
            password: env.DB_PASSWORD,
            database: env.DB_DATABASE,
            dialect: "mysql",
            timezone: "Asia/Seoul",
            dialectOptions: {
                dataStrings: true,
                typeCast: true,
            },
            define: {
                freezeTableName: true,
                timestamp: true,
            },
        },
        test: {},
    },
};

module.exports = config;

