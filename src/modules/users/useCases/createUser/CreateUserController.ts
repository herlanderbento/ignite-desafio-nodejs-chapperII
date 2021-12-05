import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    this.createUserUseCase.execute({ name, email });

    return response.status(201).send();
  }
}

export { CreateUserController };
