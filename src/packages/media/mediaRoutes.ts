import { Router } from 'express';
import { checkJwt, checkRole, wrapAsync } from '../../middlewares';
import { getMedia } from './getMedia';
import { getMediaByService } from './getMediaByService';
import { postMedia } from './postMedia';

const mediaRouter = Router();

mediaRouter.get('/', wrapAsync(getMedia));
// mediaRouter.get('/', [checkJwt, checkRole(['ADMIN'])], wrapAsync(getUsers));

mediaRouter.get('/:service', wrapAsync(getMediaByService));
// mediaRouter.get('/:service', [checkJwt, checkRole(['ADMIN'])], wrapAsync(getUsers));

mediaRouter.post('/', wrapAsync(postMedia));

export { mediaRouter };
