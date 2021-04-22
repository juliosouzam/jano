import { Router } from 'express';

import { CreatePermissionController } from '@modules/roles/useCase/createPermission/CreatePermissionController';

const permissionsRoutes = Router();

const createPermissionController = new CreatePermissionController();

permissionsRoutes.post('/', createPermissionController.handle);

export { permissionsRoutes };
