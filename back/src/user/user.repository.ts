import { ModelCtor } from "sequelize-typescript";
import { PointDown, PointUp, Quiz, User } from "../../models";

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
    User?: ModelCtor<User>;
    Quiz?: ModelCtor<Quiz>;
    PointUp?: ModelCtor<PointUp>;
    PointDown?: ModelCtor<PointDown>;
}

export interface Token {
    token: string;
}

class UserRepository {
    public User;
    public PointUp;
    public PointDown;
    constructor({ User, PointUp, PointDown }: ClassModels) {
        this.User = User!;
        this.PointUp = PointUp!;
        this.PointDown = PointDown!;
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

    async profile({ userId }: Users) {
        try {
            const profiledata = await this.User.findOne({ raw: true, where: { userId } });
            console.log(profiledata, "rerere");
            return profiledata;
        } catch (error: any) {
            throw new Error();
        }
    }

    async checkValue({ userId }: Users): Promise<boolean> {
        try {
            const [data] = await this.User.findAll({ where: { userId }, include: [PointDown, PointUp] });
            const response = data ? false : true;
            return response;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default UserRepository;

