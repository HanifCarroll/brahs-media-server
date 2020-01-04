import { Repository, getRepository } from 'typeorm';
import { Media } from '../../typeorm/entity';

export class MediaService {
  constructor(private mediaRepository: Repository<Media> = getRepository(Media)) {}

  public async findAll(): Promise<Media[]> {
    const media = await this.mediaRepository.find();

    return media;
  }

  public async findByService(service: string): Promise<Media[]> {
    const media = await this.mediaRepository.find({
      where: { service },
    });

    return media;
  }

  public async save(media: Media): Promise<Media> {
    return await this.mediaRepository.save(media);
  }
}
