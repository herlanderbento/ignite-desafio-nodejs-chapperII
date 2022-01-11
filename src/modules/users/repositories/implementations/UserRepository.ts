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

  public create({ name, email }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
  }

  public list(): User[] {
    return this.users;
  }

  public findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  public findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  public turnAdmin(admin: User): User {
    const user = admin;

    user.admin = !user.admin;
    user.updated_at = new Date();

    return user;
  }
}

export { UserRepository };
