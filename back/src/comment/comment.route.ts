import express, { Router, Request, Response, NextFunction } from "express"
import { Controller } from "./comment.module"
const router: Router = express.Router()

router.get("/", (req: Request, res: Response, next: NextFunction) => Controller.getFindAll(req, res, next))
router.post("/", (req: Request, res: Response, next: NextFunction) => Controller.postCreate(req, res, next))
router.put("/:id", (req: Request, res: Response, next: NextFunction) => Controller.putModify(req, res, next))
router.delete("/:id", (req: Request, res: Response, next: NextFunction) => Controller.deleteComment(req, res, next))
router.get("/:date", (req: Request, res: Response, next: NextFunction) => Controller.getFindAllDate(req, res, next))

export default router
