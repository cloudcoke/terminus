class AuthController {
  constructor() {}

  getTest(req, res, next) {
    try {
      res.send("auth test3")
    } catch (e) {}
  }
}

module.exports = AuthController
