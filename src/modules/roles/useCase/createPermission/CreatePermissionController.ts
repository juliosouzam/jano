import { Request, Response } from 'express';

import { PermissionsRepository } from '@modules/roles/infra/typeorm/repositories/PermissionsRepository';
import { RolesRepository } from '@modules/roles/infra/typeorm/repositories/RolesRepository';

import { CreatePermissionUseCase } from './CreatePermissionUseCase';

export class CreatePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, slug, role_id } = request.body;

    const permissionsRepository = new PermissionsRepository();
    const rolesRepository = new RolesRepository();
    const createPermissionUseCase = new CreatePermissionUseCase(
      permissionsRepository,
      rolesRepository
    );

    await createPermissionUseCase.handle({ name, slug, role_id });

    return response.status(201).send();
  }
}
