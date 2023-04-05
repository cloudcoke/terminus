import repository, { Users, Token } from "./user.repository";
import JWT from "../../lib/jwt";
import crypto from "crypto";

interface UserServiceType {
    UserRepository: repository;
    jwt: JWT;
}

export class UserService {
    public UserRepository: repository;
    public jwt: JWT;
    public crypto: typeof crypto;
    constructor({ UserRepository, jwt }: UserServiceType) {
        this.UserRepository = UserRepository;
        this.jwt = jwt;
        this.crypto = jwt.crypto;
    }

    async inputUser({ userId, userPw }: Users) {
        try {
            if (typeof userId === "string" && typeof userPw === "string") {
                const pw = this.crypto.createHmac("sha256", this.jwt.salt).update(userPw).digest("hex");
                const data = this.UserRepository.signUp({ userId, userPw: pw });
                return data;
            }
        } catch (error: any) {
            new Error(error);
        }
    }
    async getProfile({ token }: Token) {
        try {
            const { userId } = this.jwt.verifyToken(token);
            const data = await this.UserRepository.profilePoint({ userId });
            const point = {
                userId,
                point: data,
            };
            const a = Date.parse(point.point[0].createdAt);
            console.log(a);
            return point;
        } catch (error: any) {
            new Error(error);
        }
    }
    // async modifyProfile() {}
    async check({ userId }: Users) {
        try {
            const response = this.UserRepository.checkValue({ userId });
            return response;
        } catch (error: any) {
            new Error(error);
        }
    }
}

// export const Service = new UserService(UserRepository, jwt);
export default UserService;

