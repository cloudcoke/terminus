import { Quiz, PointDown, PointUp, User } from "../../models";

import repository from "./quiz.repository";
import service from "./quiz.service";
import controller from "./quiz.controller";

const Repository = new repository({ Quiz, PointUp, PointDown, User });
const QuizService = new service({ Repository });
export const QuizContoller = new controller({ QuizService });

