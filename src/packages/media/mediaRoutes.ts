import { Router } from 'express';
import { checkJwt, checkRole, wrapAsync } from '../../middlewares';
import { getMedia } from './getMedia';
import { getMediaByService } from './getMediaByService';
import { postMedia } from './postMedia';

const mediaRouter = Router();

mediaRouter.get('/', [checkJwt, checkRole(['MEMBER', 'ADMIN'])], wrapAsync(getMedia));

mediaRouter.get(
  '/:service',
  [checkJwt, checkRole(['MEMBER', 'ADMIN'])],
  wrapAsync(getMediaByService),
);

mediaRouter.post('/', wrapAsync(postMedia));

export { mediaRouter };
