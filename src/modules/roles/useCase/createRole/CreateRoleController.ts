import { Request, Response } from 'express';

import { RolesRepository } from '@modules/roles/infra/typeorm/repositories/RolesRepository';

import { CreateRoleUseCase } from './CreateRoleUseCase';

export class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, slug } = request.body;

    const rolesRepository = new RolesRepository();
    const createRoleUseCase = new CreateRoleUseCase(rolesRepository);

    await createRoleUseCase.handle({ name, slug });

    return response.status(201).send();
  }
}
