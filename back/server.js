const app = require("./app");
const { sequelize } = require("./models/index");

app.listen(3000, async () => {
    await sequelize.sync({ false: true });
    console.log(`Back Server Start with ${3000}`);
});

