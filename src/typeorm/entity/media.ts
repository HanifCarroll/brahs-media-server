import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['url'])
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  authorName: string;

  @Column()
  authorUrl: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  thumbnailUrl: string;

  @Column({ type: 'timestamp with time zone' })
  timePosted: Date;

  @Column()
  postedBy: string;

  @Column()
  service: string;
}
