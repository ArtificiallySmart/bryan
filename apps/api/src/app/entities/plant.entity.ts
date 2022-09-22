import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commonName: string;

  @Column()
  scientificName: string;

  @Column()
  imageUrl: string;

  @Column()
  description: string;
}
