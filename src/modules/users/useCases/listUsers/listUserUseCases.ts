import { IUserRepositories } from "../../repositories/IUserRepositories";
import { User } from "../../model/User";

class ListUserUseCases {
  constructor(private userRepositories: IUserRepositories) {}

  execute(): User[] {
    return this.userRepositories.list();
  }
}

export { ListUserUseCases };
