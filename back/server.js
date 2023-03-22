const app = require("./app")
const { localPort } = require("./config")

app.listen(localPort, () => {
  console.log(`Back Server Start with ${localPort}`)
})
