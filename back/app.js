const express = require("express")
const cors = require("cors")

class App {
  constructor() {
    this.app = express()
    this.setMiddleware()
    this.setRouting()
    this.errorHandler()
  }

  setMiddleware() {
    this.app.use(cors({ origin: true, credentials: true }))
    this.app.use(express.json())
  }

  setRouting() {
    this.app.use(require("./routes"))
  }

  errorHandler() {
    this.app.use((err, req, res, next) => {
      res.status(500).send(err.message)
    })
  }
}

module.exports = new App().app
