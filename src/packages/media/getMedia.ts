import { Request, Response } from 'express';
import { MediaService } from '.';

export const getMedia = async (req: Request, res: Response): Promise<void> => {
  const mediaService = new MediaService();

  const media = await mediaService.findAll();

  res.send(media);
};
