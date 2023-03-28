class UserContoller {
    constructor({ UserService }) {
        this.UserService = UserService;
    }
    async signUp(req, res, next) {
        try {
            const { userId, userPw, nickName } = req.body;
            if (!userId && !userPw && !nickName) throw "입력값이 없습니다.";
            const data = await this.UserService.inputUser({ userId, userPw, nickName });
        } catch (error) {
            next(error);
        }
    }

    async profile(req, res, next) {
        try {
            const { token } = req.params;
            const profile = await this.UserService.getProfile({ token });
            res.json(profile);
        } catch (error) {
            next(error);
        }
    }
    async fixProfile(req, res, next) {
        try {
            const { userId, userPw, nickName } = req.body;
            const data = await this.UserService.modifyProfile({ userId, userPw, nickName });
            res.json(data);
        } catch (error) {
            next(error);
        }
    }
    async checkId(req, res, next) {
        try {
            const { userId } = req.body;
            const checked = await this.UserService.check({ userId });
            res.json(checked);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserContoller;

