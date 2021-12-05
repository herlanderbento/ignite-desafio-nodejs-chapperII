import { Router } from "express";
import { createController } from "../modules/users/useCases/createUser";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createController.handle(request, response);
});

export { usersRoutes };
