import { Router } from "express";
import { createController } from "../modules/users/useCases/createUser";
import { listUserController } from "../modules/users/useCases/listUsers";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  return listUserController.handle(request, response);
});

export { usersRoutes };
