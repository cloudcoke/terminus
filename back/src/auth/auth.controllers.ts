import { Request, Response, NextFunction } from "express";
import AuthService from "./auth.service";

interface ServiceType {
    authService: AuthService;
}

class AuthContoller {
    public authService;
    constructor({ authService }: ServiceType) {
        this.authService = authService;
    }

    async logIn(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, userPw } = req.body;
            if (!userId || !userPw) throw "입력된 정보가 없습니다.";
            const token = await this.authService.getToken({ userId, userPw });
            if (true) res.status(200).cookie("token", token, { path: "/", secure: true, domain: "terminus.run" }).json(token);
        } catch (error) {
            next(error);
        }
    }
    logOut(req: Request, res: Response, next: NextFunction) {
        try {
            res.clearCookie("token", { path: "/", secure: true, domain: "terminus.run" }).json({ status: 200 });
        } catch (error) {
            next(error);
        }
    }
}

export default AuthContoller;

