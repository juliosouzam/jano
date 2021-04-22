import { Router } from 'express';

import { CreateRoleController } from '@modules/roles/useCase/createRole/CreateRoleController';

const rolessRoutes = Router();

const createRoleController = new CreateRoleController();

rolessRoutes.post('/', createRoleController.handle);

export { rolessRoutes };
