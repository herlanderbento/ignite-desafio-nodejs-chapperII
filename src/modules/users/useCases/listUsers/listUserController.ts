import { Request, Response } from "express";
import { ListUserUseCases } from "./listUserUseCases";

class ListUserController {
  constructor(private listUserUseCases: ListUserUseCases) {}

  handle(request: Request, response: Response): Response {
    const all = this.listUserUseCases.execute();

    return response.json(all);
  }
}

export { ListUserController };
