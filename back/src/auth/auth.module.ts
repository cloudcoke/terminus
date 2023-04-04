import { User, PointDown, PointUp, Quiz } from "../../models";

import JWT from "../../lib/jwt";
import crypto from "crypto";
import config from "../../config";
const jwt = new JWT({ crypto, salt: config.salt });

import repository from "./auth.repository";
import service from "./auth.service";
import controller from "./auth.controllers";

const authRepository = new repository(User);
const authService = new service({ authRepository, jwt });
export const authContoller = new controller({ authService });

