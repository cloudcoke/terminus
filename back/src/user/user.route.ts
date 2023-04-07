import express, { Router, Request, Response, NextFunction } from "express";
import { UserContoller } from "./user.module";
const router: Router = express.Router();

router.get("/profile/:userId", (req: Request, res: Response, next: NextFunction) => UserContoller.profile(req, res, next));
router.get("/ranking", (req: Request, res: Response, next: NextFunction) => UserContoller.ranking(req, res, next));
router.post("/", (req: Request, res: Response, next: NextFunction) => UserContoller.signUp(req, res, next));
router.post("/check", (req: Request, res: Response, next: NextFunction) => UserContoller.checkId(req, res, next));

export default router;

