import repository from "./comment.repository";
import { IdInter, Date, InputComment, ChangeComment } from "./comment.repository";

class CommentService {
    constructor(public Repository: repository) {}

    async findAll() {
        try {
            const response = await this.Repository.findAllCommnet();
            let data = response.map((v) => {
                let k = { ...v, isUpdate: false };
                return k;
            });
            return data;
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async create({ userId, comment }: InputComment) {
        try {
            const response = await this.Repository.createComment({ userId, comment });
            return response;
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async modify({ id, comment }: ChangeComment) {
        try {
            const response = await this.Repository.modifyComment({ id, comment });
            return response;
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async delete({ id }: IdInter) {
        try {
            const response = await this.Repository.deleteComment({ id });
            return response;
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async findAllDate({ date }: Date) {
        try {
            const year = Number(date.slice(0, 4));
            let month = Number(date.slice(4, 6));
            const day = Number(date.slice(6, 8));
            const response = await this.Repository.findAllDateComment({ year, month, day });
            return response;
        } catch (e: any) {
            throw new Error(e);
        }
    }
}

export default CommentService;

