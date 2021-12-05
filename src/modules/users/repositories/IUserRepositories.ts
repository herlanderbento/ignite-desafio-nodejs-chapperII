import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUserRepositories {
  create({ name, email }: ICreateUserDTO): void;
  list(): User[];
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  turnAdmin(user: User): User;
}

export { IUserRepositories, ICreateUserDTO };
