import { Router } from 'express';

import { permissionsRoutes } from './permissions.routes';
import { rolessRoutes } from './roles.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/roles', rolessRoutes);
routes.use('/permissions', permissionsRoutes);

export default routes;
