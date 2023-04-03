import { Request, Response, NextFunction } from "express";

namespace globaltype {
    export interface Controller {
        (req: Request, res: Response, next: NextFunction): void;
    }

    export interface User {
        user: string;
        age: number;
    }
}

// declare User

