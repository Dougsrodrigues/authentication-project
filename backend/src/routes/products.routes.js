import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const productsRouter = Router();

productsRouter.use(ensureAuthenticated);

productsRouter.get('/', async (req, res) => {
  res.json({ ok: 'Hello' });
});

export default productsRouter;
