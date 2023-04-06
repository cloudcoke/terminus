import { ModelCtor } from "sequelize-typescript";
import sequelize, { PointDown, PointUp, Quiz, User } from "../../models";

export interface Users {
    userId: string;
    userPw?: string;
    nickName?: string;
}

const user: Users = {
    userId: "1234",
    userPw: "1234",
};

export interface ClassModels {
    User: ModelCtor<User>;
    Quiz: ModelCtor<Quiz>;
    PointUp: ModelCtor<PointUp>;
    PointDown: ModelCtor<PointDown>;
}

export interface Token {
    token: string;
}

class UserRepository {
    public User;
    public PointUp;
    public PointDown;
    constructor({ User, PointUp, PointDown }: ClassModels) {
        this.User = User;
        this.PointUp = PointUp;
        this.PointDown = PointDown;
    }

    async signUp({ userId, userPw }: Users) {
        try {
            const data = await this.User.create({ userId, userPw });
            if (data) {
                let datas = { userId: data.dataValues.userId };
                return datas;
            }
            return false;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async profilePoint({ userId }: Users): Promise<any> {
        try {
            const [data] = await sequelize.query(
                `SELECT
'PointUp' AS SourceTable,
PointUp.Point,
PointUp.quizid,
Quiz.command,
PointUp.userId,
PointUp.createdAt
FROM User
LEFT JOIN PointUp ON User.userId = PointUp.userId
LEFT JOIN Quiz ON PointUp.quizid = Quiz.id
WHERE User.userId = "${userId}"
UNION
SELECT
'PointDown' AS SourceTable,
PointDown.Point,
NULL AS quizid,
NULL AS command,
PointDown.userId,
PointDown.createdAt
FROM User
LEFT JOIN PointDown ON User.userId = PointDown.userId
WHERE User.userId = "${userId}"
ORDER BY createdAt ASC;`,
                { logging: false }
            );
            return data;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async checkValue({ userId }: Users): Promise<boolean> {
        try {
            const [data] = await this.User.findAll({ where: { userId } });
            const response = data ? false : true;
            return response;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default UserRepository;

