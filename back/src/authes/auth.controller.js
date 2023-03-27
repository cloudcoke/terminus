class AuthController {
  constructor() {}

  getTest(req, res, next) {
    try {
      res.send("auth test")
    } catch (e) {}
  }
}

module.exports = AuthController
