class UserRepository {
    constructor({ User }) {
        this.User = User
    }

    async signUp({ userId, userPw, nickName }) {
        try {
            const data = await this.User.create({ userId, userPw, nickName })
            return data
        } catch (error) {
            new Error(error)
        }
    }

    async checkValue({ userId }) {
        try {
            const data = await this.User.findOne({ raw: true, where: { userId } })
            const response = data ? false : true
            return response
        } catch (error) {
            new Error(error)
        }
    }
}

module.exports = UserRepository
