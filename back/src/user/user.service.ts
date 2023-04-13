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
    public totalQuiz: any;

    constructor({ UserRepository, jwt }: UserServiceType) {
        this.UserRepository = UserRepository;
        this.jwt = jwt;
        this.crypto = jwt.crypto;
        this.totalQuiz = new Object();
        this.TotalQuiz();
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
    async getProfile({ userId }: Users) {
        try {
            const data = await this.UserRepository.profilePoint({ userId });
            const sumData = (data: any) => {
                let a: number = 0;
                data.forEach((element: any) => {
                    a += element.Point;
                });
                return a;
            };
            const Up: number = sumData(data.filter((v: any) => v.SourceTable === "PointUp"));
            const Down: number = sumData(data.filter((v: any) => v.SourceTable === "PointDown"));

            const point = {
                userId,
                point: data,
                total: Up - Down,
            };
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

    async ranked() {
        try {
            const data: any = await this.UserRepository.getRank();
            const response = data.filter((v: any) => parseInt(v.totalPoints) < this.totalQuiz.total).slice(0, 3);
            return response;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async graduate() {
        try {
            const data: any = await this.UserRepository.getRank();
            const response = data.filter((v: any) => parseInt(v.totalPoints) >= this.totalQuiz.total);

            return response;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async TotalQuiz() {
        if (!this.totalQuiz.total) {
            const a = await this.UserRepository.getTotalQuiz();
            this.totalQuiz.total = a * 10;
            return;
        }
    }
}

// export const Service = new UserService(UserRepository, jwt);
export default UserService;

