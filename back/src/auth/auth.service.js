class AuthService {
    constructor({ AuthRepository, jwt }) {
        this.AuthRepository = AuthRepository;
        this.jwt = jwt;
        this.crypto = jwt.crypto;
    }

    async getToken({ userId, userPw }) {
        try {
            const hash = this.crypto.createHmac("sha256", this.jwt.salt).update(userPw).digest("hex");
            const userInfo = await this.AuthRepository.findInfo({ userId, userPw: hash });
            const token = this.jwt.createToken(userInfo);
            return token;
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

module.exports = AuthService;

