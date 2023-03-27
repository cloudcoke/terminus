class AuthController {
  constructor() {}

  getTest(req, res, next) {
    try {
      res.send("auth test2")
    } catch (e) {}
  }
}

module.exports = AuthController
