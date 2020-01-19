import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['url'])
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  authorName: string;

  @Column({ nullable: true })
  authorUrl: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  thumbnailUrl: string;

  @Column({ nullable: true, type: 'timestamp with time zone' })
  timePosted: Date;

  @Column({ nullable: true })
  postedBy: string;

  @Column({ nullable: true })
  service: string;
}
