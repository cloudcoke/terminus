import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./routes";

// const express = require("express");
// const cors = require("cors");

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.setMiddleware();
        this.setRouting();
        this.errorHandler();
    }

    setMiddleware() {
        this.app.use(cors({ origin: true, credentials: true }));
        this.app.use(express.json());
    }

    setRouting() {
        this.app.use(router);
    }

    errorHandler() {
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            res.status(400).send(err.message);
        });
    }
}

export default new App().app;

// const setMiddleware = (app: Application) => {
//     app.use(
//         cors({
//             origin: true,
//             credentials: true,
//         })
//     );
//     app.use(express.json());
//     app.use(router);
// };

// const setRouter = (app) => {};

// const setErrorHandler = (app: Application) => {
//     app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//         res.status(500).send(err.message);
//     });
// };

// const App = (): Application => {
//     const app = express();
//     setMiddleware(app);
//     // setErrorHandler(app);
//     return app;
// };

// export default App();

