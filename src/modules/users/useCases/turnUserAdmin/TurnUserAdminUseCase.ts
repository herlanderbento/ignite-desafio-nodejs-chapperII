import { AppError } from "../../../../error/AppError";
import { User } from "../../model/User";
import { IUserRepositories } from "../../repositories/IUserRepositories";

class TurnUserAdminUseCase {
  constructor(private userRepositories: IUserRepositories) {}

  public execute(user_id: string): User {
    const user = this.userRepositories.findById(user_id);

    if (!user) {
      throw new AppError("User not found!", 404);
    }

    return this.userRepositories.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
