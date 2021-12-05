import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ShowUserProfileController } from "./ShowUserProfileController";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

const userRepository = UserRepository.getInstance();

const showUserProfileUseCase = new ShowUserProfileUseCase(userRepository);

const showUserProfileController = new ShowUserProfileController(
  showUserProfileUseCase
);

export { showUserProfileController };
