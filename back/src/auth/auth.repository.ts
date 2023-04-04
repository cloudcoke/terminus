import { ModelCtor } from "sequelize-typescript";
import { User } from "../../models";
import { Users } from "../user/user.repository";

class Authrepositroy {
    public User;
    constructor(User: ModelCtor<User>) {
        this.User = User;
    }

    async findInfo({ userId, userPw }: Users): Promise<Users> {
        try {
            const user = await this.User.findOne({ raw: true, attributes: { exclude: ["userPw", "createdAt", "updatedAt"] }, where: { userId, userPw } });
            if (user) {
                return user;
            } else throw "User값이 없습니다";
        } catch (error: any) {
            throw new Error(error);
        }
    }

    logOut() {
        try {
        } catch (error: any) {
            new Error(error);
        }
    }
}
export default Authrepositroy;

