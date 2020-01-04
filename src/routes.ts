import { Router } from 'express';
import { authRouter } from './packages/auth';
import { userRouter } from './packages/user';
import { mediaRouter } from './packages/media/mediaRoutes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/user', userRouter);
routes.use('/media', mediaRouter);

export { routes };
