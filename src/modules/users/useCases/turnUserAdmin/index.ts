import { UserRepository } from "../../repositories/implementations/UserRepository";
import { TurnUserAdminController } from "./TurnUserAdminController";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

const userRepository = UserRepository.getInstance();

const turnUserAdminUseCase = new TurnUserAdminUseCase(userRepository);

const turnUserAdminController = new TurnUserAdminController(
  turnUserAdminUseCase
);

export { turnUserAdminController };
