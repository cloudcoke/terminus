require("dotenv").config()
const env = process.env

const config = {
  localPort: env.LOCAL_PORT,
}

module.exports = config
