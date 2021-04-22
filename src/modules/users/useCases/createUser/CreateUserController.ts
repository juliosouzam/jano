import { Request, Response } from 'express';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const createUserUseCase = new CreateUserUseCase(usersRepository);

    await createUserUseCase.handle({ name, email, password });

    return response.status(201).send();
  }
}
