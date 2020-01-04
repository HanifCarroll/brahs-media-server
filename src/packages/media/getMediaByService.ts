import { Request, Response } from 'express';
import { MediaService } from '.';

export const getMediaByService = async (req: Request, res: Response): Promise<void> => {
  const mediaService = new MediaService();
  const { service } = req.body;
  const media = await mediaService.findByService(service);

  res.send(media);
};
