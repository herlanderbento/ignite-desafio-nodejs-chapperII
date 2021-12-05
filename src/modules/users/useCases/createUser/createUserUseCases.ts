import { IUserRepositories } from "../../repositories/IUserRepositories";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCases {
  constructor(private userRepositories: IUserRepositories) {}

  execute({ name, email }: IRequest) {
    const userAlreadyExists = this.userRepositories.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error(" User already exits!");
    }

    this.userRepositories.create({ name, email });
  }
}

export { CreateUserUseCases };
