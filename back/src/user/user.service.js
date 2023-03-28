class UserService {
    constructor({ UserRepository, jwt }) {
        this.UserRepository = UserRepository;
        this.jwt = jwt;
        this.crypto = jwt.crypto;
    }

    async inputUser({ userId, userPw, nickName }) {
        try {
            const pw = this.crypto.createHmac("sha256", this.jwt.salt).update(userPw).digest("hex");
            const data = this.UserRepository.signUp({ userId, userPw: pw, nickName });
            return data;
        } catch (error) {
            new Error(error);
        }
    }
    async getProfile({ token }) {
        /* 로직 auth */
    }
    async modifyProfile() {}
    async check({ userId }) {
        try {
            const response = this.UserRepository.checkValue({ userId });
            return response;
        } catch (error) {
            new Error(error);
        }
    }
}

module.exports = UserService;

