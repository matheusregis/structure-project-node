import { Router } from 'express';

import accountRoutes from '../../../modules/account/routes/account.routes';

const routes = Router();

routes.use('/', accountRoutes);

export default routes;
