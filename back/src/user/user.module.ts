import { User, PointDown, PointUp, Quiz } from "../../models";

import JWT from "../../lib/jwt";
import crypto from "crypto";
import config from "../../config";
const jwt = new JWT({ crypto, salt: config.salt });

import repository from "./user.repository.js";
import service from "./user.service";
import controller from "./user.controller";

const UserRepository = new repository({ User, PointUp, PointDown, Quiz });
const UserService = new service({ UserRepository, jwt });
export const UserContoller = new controller({ UserService });

