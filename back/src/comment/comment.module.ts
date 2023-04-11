import { Comment } from "../../models"

import repository from "./comment.repository"
import service from "./comment.service"
import controller from "./commnet.controller"

const Repository = new repository(Comment)
const Service = new service(Repository)
export const Controller = new controller(Service)
