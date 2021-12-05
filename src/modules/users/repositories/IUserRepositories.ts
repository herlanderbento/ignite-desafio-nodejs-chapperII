import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUserRepositories {
  findById(id: string): User;
  findByEmail(email: string): User;
  turnAdmin(admin: boolean): User;
  list(): User[];
  create({ name, email }: ICreateUserDTO): void;
}

export { IUserRepositories, ICreateUserDTO };
