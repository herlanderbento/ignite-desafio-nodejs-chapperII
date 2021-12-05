import { Router } from "express";
import { createController } from "../modules/users/useCases/createUser";
import { listAllUserController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) => {
  return listAllUserController.handle(request, response);
});

usersRoutes.get("/:user_id", (request, response) => {
  return showUserProfileController.handle(request, response);
});

usersRoutes.post("/", (request, response) => {
  return createController.handle(request, response);
});

usersRoutes.patch("/:user_id/admin", (request, response) => {
  return turnUserAdminController.handle(request, response);
});

export { usersRoutes };
