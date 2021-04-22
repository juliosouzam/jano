import { hash } from 'bcryptjs';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../protocols/IUsersRepository';

export class CreateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async handle({ name, email, password }: ICreateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);
    if (userExists) {
      throw new Error('User already exists');
    }

    const passHash = await hash(password, 10);

    await this.usersRepository.create({ name, email, password: passHash });
  }
}
