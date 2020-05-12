import { Router } from 'express';

import usersRouter from './users.routes';
import productsRouter from './products.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/sessions', sessionsRouter);

routes.use('/products', productsRouter);

export default routes;
