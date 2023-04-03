import sequelize from "../../models";
import { Quiz } from "../../models";

import repository from "./quiz.repository";
import service from "./quiz.service";
import controller from "./quiz.controller";
import { ModelCtor } from "sequelize-typescript";

const Repository = new repository(Quiz as ModelCtor<Quiz>);
const QuizService = new service({ Repository });
export const QuizContoller = new controller({ QuizService });

