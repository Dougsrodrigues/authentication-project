import { Router } from 'express';

import SessionsService from '../services/SessionsService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const sessionsService = new SessionsService();

  const { user } = await sessionsService.execute({ email, password });

  return res.json({ user });
});
