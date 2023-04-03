import express, { Router } from "express";
const router: Router = express.Router();
import { logIn, logOut } from "./auth.controller";

router.post("/", logIn);
router.get("/", logOut);

export default router;

