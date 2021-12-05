import { IUserRepositories } from "../../repositories/IUserRepositories";
import { User } from "../../model/User";

class ListAllUsersUseCase {
  constructor(private userRepositories: IUserRepositories) {}

  public execute(): User[] {
    return this.userRepositories.list();
  }
}

export { ListAllUsersUseCase };
