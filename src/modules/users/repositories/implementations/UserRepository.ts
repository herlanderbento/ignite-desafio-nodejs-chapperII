import { User } from "../../model/User";
import { IUserRepositories, ICreateUserDTO } from "../IUserRepositories";

class UserRepository implements IUserRepositories {
  private users: User[];

  private static INSTANCE: UserRepository;

  constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
  }

  findById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User {
    return this.users.find((user) => user.email === email);
  }

  turnAdmin(admin: boolean): User {
    throw new Error("Method not implemented.");
  }

  list(): User[] {
    return this.users;
  }

  create({ name, email }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
  }
}

export { UserRepository };
