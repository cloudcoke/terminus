const app = require("./app");
const { localPort } = require("./config");
const { sequelize } = require("./models");

app.listen(localPort, async () => {
    await sequelize.sync({ force: true });
    console.log(`Back Server Start with ${localPort}`);
});

