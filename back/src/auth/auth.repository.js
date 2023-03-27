class AuthRepository {
    constructor({ User }) {
        this.User = User;
    }

    async findInfo({ userId, userPw }) {
        try {
            const user = await this.User.findOne({ raw: true, attributes: { exclude: ["userpw"] }, where: { userId, userPw } });
            return user;
        } catch (error) {
            next(error);
        }
    }
    logOut(req, res, next) {
        try {
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthRepository;

