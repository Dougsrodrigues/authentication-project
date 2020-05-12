import { Router } from 'express';

import SessionsService from '../services/SessionsService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const sessionsService = new SessionsService();
  const { user, token } = await sessionsService.execute({ email, password });

  delete user.dataValues.password_hash;

  return res.json({ user, token });
});

export default sessionsRouter;
