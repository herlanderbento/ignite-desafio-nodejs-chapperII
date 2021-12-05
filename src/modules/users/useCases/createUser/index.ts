import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = UserRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createController = new CreateUserController(createUserUseCase);

export { createController };
