import service from "./comment.service"
import { Request, Response, NextFunction } from "express"

class CommentController {
  constructor(public Service: service) {}

  async getFindAll(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.Service.findAll()
      res.json(response)
    } catch (e) {
      next(e)
    }
  }

  async postCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, comment } = req.body
      const response = await this.Service.create({ userId, comment })
      res.json(response)
    } catch (e) {
      next(e)
    }
  }

  async putModify(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const { comment } = req.body
      const response = await this.Service.modify({ id, comment })
      res.json(response)
    } catch (e) {
      next(e)
    }
  }

  async deleteComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await this.Service.delete({ id })
      res.json(response)
    } catch (e) {
      next(e)
    }
  }

  async getFindAllDate(req: Request, res: Response, next: NextFunction) {
    try {
      const { date } = req.params
      const response = await this.Service.findAllDate({ date })
      res.json(response)
    } catch (e) {
      next(e)
    }
  }
}

export default CommentController
