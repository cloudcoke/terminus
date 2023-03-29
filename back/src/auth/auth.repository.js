class AuthRepository {
    constructor({ User }) {
        this.User = User;
    }

    async findInfo({ userId, userPw }) {
        try {
            const user = await this.User.findOne({ raw: true, attributes: { exclude: ["userPw", "createdAt", "updatedAt"] }, where: { userId, userPw } });
            return user;
        } catch (error) {
            new Error(error);
        }
    }
    logOut(req, res, next) {
        try {
        } catch (error) {
            new Error(error);
        }
    }
}

module.exports = AuthRepository;

