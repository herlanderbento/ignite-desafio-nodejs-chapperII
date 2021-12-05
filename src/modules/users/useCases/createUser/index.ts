import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCases } from "./createUserUseCases";

const userRepository = UserRepository.getInstance();

const createUserUseCases = new CreateUserUseCases(userRepository);

const createController = new CreateUserController(createUserUseCases);

export { createController };
