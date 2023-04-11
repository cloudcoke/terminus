import { ModelCtor } from "sequelize-typescript"
import { Op } from "sequelize"
import { Comment } from "../../models"

export interface CommnetInter {
  comment: string
}

export interface IdInter {
  id: string
}

export interface Date {
  date: string
}

export interface NewDate {
  year: number
  month: number
  day: number
}

export interface InputComment extends CommnetInter {
  userId: string
}

export interface ChangeComment extends CommnetInter, IdInter {}

class CommentRepository {
  constructor(public Comment: ModelCtor<Comment>) {}

  async findAllCommnet() {
    try {
      const response = await this.Comment.findAll({ attributes: { exclude: ["updatedAt"] }, raw: true })
      /*
    [
        {
        "id": 1,
        "comment": "hello1",
        "userid": "admin1",
        "createdAt": "2023-04-11 13:43:39",
        "updatedAt": "2023-04-11 13:43:39"
        },
    ]
      */
      return response
    } catch (e: any) {
      throw new Error(e)
    }
  }

  async createComment({ userId, comment }: InputComment) {
    try {
      const response = await this.Comment.create({ userId, comment })
      /*
    {
    "id": 3,
    "userid": "admin1",
    "comment": "hello world",
    "updatedAt": "2023-04-11T04:46:07.188Z",
    "createdAt": "2023-04-11T04:46:07.188Z"
    }
    */
      return response
    } catch (e: any) {
      throw new Error(e)
    }
  }

  async modifyComment({ id, comment }: ChangeComment) {
    try {
      const response = await this.Comment.update({ comment }, { where: { id } })
      /*
      성공
      [ 0 ]
      실패
      [ 1 ]
      */
      return response
    } catch (e: any) {
      throw new Error(e)
    }
  }

  async deleteComment({ id }: IdInter) {
    try {
      const response = await this.Comment.destroy({ where: { id } })
      /*
      성공
      1
      실패
      0
      */
      return response
    } catch (e: any) {
      throw new Error(e)
    }
  }

  async findAllDateComment({ year, month, day }: NewDate) {
    try {
      const response = await this.Comment.findAll({
        where: {
          createdAt: {
            [Op.gt]: new Date(year, month - 1, day),
            [Op.lt]: new Date(year, month - 1, day + 1),
          },
        },
        attributes: { exclude: ["updatedAt"] },
      })
      return response
    } catch (e: any) {
      throw new Error(e)
    }
    /*
    성공
    [
        {
            "id": 1,
            "comment": "hello1",
            "userId": "admin1",
            "createdAt": "2023-04-11 16:19:29"
        },
        {
            "id": 2,
            "comment": "hello2",
            "userId": "admin1",
            "createdAt": "2023-04-11 16:19:29"
        }
    ]
    실패
    []
     */
  }
}

export default CommentRepository
