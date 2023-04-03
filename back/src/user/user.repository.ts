import { ModelCtor } from "sequelize-typescript";
import { PointDown, PointUp, Quiz, User } from "../../models";

export interface Users {
    userId: string;
    userPw?: string;
    nickName?: string;
}

export interface classModels<> {
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
    constructor({ User, Quiz, PointUp, PointDown }: classModels) {
        this.User = User;
        this.PointUp = PointUp;
        this.PointDown = PointDown;
    }

    async signUp({ userId, userPw, nickName }: Users) {
        try {
            const data = await this.User.create({ userId, userPw, nickName });
            return data.dataValues;
        } catch (error: any) {
            throw new Error();
        }
    }

    async profile({ token }: Token) {
        try {
            const profiledata = await this.User.findOne({ raw: true, where: { token } });
            return profiledata;
        } catch (error: any) {
            throw new Error();
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

