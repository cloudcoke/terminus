import { Request, Response, NextFunction } from "express";
import express, { Router } from "express";
const router: Router = express.Router();
// import { logIn, logOut } from "./auth.controller";
import { authContoller } from "./auth.module";

router.post("/", (req: Request, res: Response, next: NextFunction) => authContoller.logIn(req, res, next));
router.get("/", (req: Request, res: Response, next: NextFunction) => authContoller.logOut(req, res, next));

export default router;

