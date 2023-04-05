import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";

interface ServiceType {
    UserService: UserService;
}

class UserContoller {
    public UserService: UserService;
    constructor({ UserService }: ServiceType) {
        this.UserService = UserService;
    }
    async signUp(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, userPw } = req.body;
            if (!userId && !userPw) throw "입력값이 없습니다.";
            const data = await this.UserService.inputUser({ userId, userPw });
            if (data) {
                return res.json({ data, status: 200 });
            }
            res.json({ data, status: 403, message: "회원가입이 완료되지 않았습니다" });
        } catch (error) {
            next(error);
        }
    }

    async profile(req: Request, res: Response, next: NextFunction) {
        try {
            const { token } = req.params;
            const profile = await this.UserService.getProfile({ token });
            res.json(profile);
        } catch (error) {
            next(error);
        }
    }
    // async fixProfile(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         const { userId, userPw, nickName } = req.body;
    //         const data = await this.UserService.modifyProfile({ userId, userPw, nickName });
    //         res.json(data);
    //     } catch (error) {
    //         next(error);
    //     }
    async checkId(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.body;
            const checked = await this.UserService.check({ userId });
            if (!checked) {
                res.json({ data: checked, status: 401, message: "중복된 아이디 입니다." });
            } else {
                res.json({ data: checked, status: 200 });
            }
        } catch (error) {
            next(error);
        }
    }
}

// export const Controller = new UserContoller(Service);

export default UserContoller;

