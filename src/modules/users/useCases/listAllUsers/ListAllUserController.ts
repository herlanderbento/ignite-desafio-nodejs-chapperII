import { Request, Response } from "express";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUserController {
  constructor(private listAllUserUseCase: ListAllUsersUseCase) {}

  public handle(request: Request, response: Response): Response {
    const all = this.listAllUserUseCase.execute();

    return response.json(all);
  }
}

export { ListAllUserController };
