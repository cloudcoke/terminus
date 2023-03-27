class AuthService {
    constructor({ AuthRepository, jwt }) {
        this.AuthRepository = AuthRepository;
        this.jwt = jwt;
        this.crypto = jwt.cripto;
    }

    async getToken({ userId, userPw }) {
        try {
            const hash = this.crypto.createHmac("sha256", "web7722").update(userPw).digest("hex");
            const userInfo = await this.AuthRepository.findInfo({ userId, userPw: hash });
            const token = this.jwt.createToken(userInfo);
            return token;
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

module.exports = AuthService;

