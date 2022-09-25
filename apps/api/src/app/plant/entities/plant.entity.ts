import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Plant {
  @PrimaryColumn()
  id: string;

  @Column()
  commonName: string;

  @Column()
  scientificName: string;

  @Column()
  imageUrl: string;

  @Column()
  description: string;
}
