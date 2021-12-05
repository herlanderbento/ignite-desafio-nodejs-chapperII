import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUserController } from "./listUserController";
import { ListUserUseCases } from "./listUserUseCases";

const userRepository = UserRepository.getInstance();

const listUserUseCases = new ListUserUseCases(userRepository);

const listUserController = new ListUserController(listUserUseCases);

export { listUserController };
