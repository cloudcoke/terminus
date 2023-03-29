class AuthContoller {
    constructor({ AuthService }) {
        this.AuthService = AuthService;
    }

    async logIn(req, res, next) {
        try {
            const { userId, userPw } = req.body;
            if (!userId || !userPw) throw "입력된 정보가 없습니다.";
            const token = await this.AuthService.getToken({ userId, userPw });
            res.json(token);
        } catch (error) {
            next(error);
        }
    }
    logOut(req, res, next) {
        try {
            console.log("logout");
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthContoller;

