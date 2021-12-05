import { AppError } from "../../../../error/AppError";
import { IUserRepositories } from "../../repositories/IUserRepositories";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private userRepositories: IUserRepositories) {}

  public execute({ name, email }: IRequest) {
    const userAlreadyExists = this.userRepositories.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError(" User already exits!", 404);
    }

    this.userRepositories.create({ name, email });
  }
}

export { CreateUserUseCase };
