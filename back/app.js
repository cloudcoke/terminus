const express = require("express");
const cors = require("cors");

const setMiddleware = (app) => {
    app.use(
        cors({
            origin: true,
            credentials: true,
        })
    );
    app.use(express.json());
};

const setRouter = (app) => {
    const router = require("./routes");
    app.use(router);
};

const setErrorHandler = (app) => {
    app.use((err, req, res, next) => {
        res.status(500).send(err.message);
    });
};

const App = () => {
    const app = express();
    setMiddleware(app);
    setErrorHandler(app);
    setRouter(app);
    return app;
};

module.exports = App();

