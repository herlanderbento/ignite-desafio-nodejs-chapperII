import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListAllUserController } from "./ListAllUserController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const userRepository = UserRepository.getInstance();

const listAllUsersUseCase = new ListAllUsersUseCase(userRepository);

const listAllUserController = new ListAllUserController(listAllUsersUseCase);

export { listAllUserController };
