import { Request, Response } from "express";
import { CreateUserUseCases } from "./createUserUseCases";

class CreateUserController {
  constructor(private createUserUseCases: CreateUserUseCases) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    this.createUserUseCases.execute({ name, email });

    return response.status(201).send();
  }
}

export { CreateUserController };
