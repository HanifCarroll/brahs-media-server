import { Request, Response } from 'express';
import { MediaService } from '.';
import { Media } from '../../typeorm/entity';

export const postMedia = async (req: Request, res: Response): Promise<void> => {
  const mediaService = new MediaService();
  const {
    title,
    authorName,
    authorUrl,
    description,
    url,
    thumbnailUrl,
    timePosted,
    postedBy,
    service,
  } = req.body;
  const media = new Media();
  media.title = title;
  media.authorName = authorName;
  media.authorUrl = authorUrl;
  media.description = description;
  media.url = url;
  media.thumbnailUrl = thumbnailUrl;
  media.timePosted = timePosted;
  media.postedBy = postedBy;
  media.service = service;

  try {
    await mediaService.save(media);
  } catch (e) {
    res.status(409).send('Media already exists');
    return;
  }

  res.status(201).send('Media created');
};
