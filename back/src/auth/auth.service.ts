import repository from "./auth.repository";
import JWT from "../../lib/jwt";
import { Users } from "../user/user.repository";

interface ServiceType {
    authRepository: repository;
    jwt: JWT;
}

class AuthService {
    public authRepository;
    public jwt;
    public crypto;
    constructor({ authRepository, jwt }: ServiceType) {
        this.authRepository = authRepository;
        this.jwt = jwt;
        this.crypto = jwt.crypto;
    }

    async getToken({ userId, userPw }: Users) {
        try {
            if (typeof userId === "string" && typeof userPw === "string") {
                const hash = this.crypto.createHmac("sha256", this.jwt.salt).update(userPw).digest("hex");
                const userInfo = await this.authRepository.findInfo({ userId, userPw: hash });
                const token = this.jwt.createToken({ ...userInfo });
                return token;
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }
    logOut() {
        try {
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default AuthService;

