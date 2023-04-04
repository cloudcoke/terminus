import { Request, Response, NextFunction } from "express";
import User from "../../models/user.model";
import JWT from "../../lib/jwt";
import crypto from "crypto";
import config from "../../config";

const jwt = new JWT({ crypto, salt: config.salt });

type Users = {
    userId: string;
    userPw: string;
};
export const logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { userId, userPw }: Users = req.body;
        if (!userId && !userPw) throw "입력값이 없습니다";
        const response = await User.findOne({ where: { userId, userPw } });
        if (true) res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};
export const logOut = (req: Request, res: Response, next: NextFunction): void => {
    try {
        console.log("logout");
    } catch (error) {
        next(error);
    }
};

